<template>
    <div>
        <mt-header fixed title="登录"></mt-header>
        <mt-field  placeholder="请输入用户名" :state="formStateU" v-model="loginForm.Username" @blur.native.capture="checkUsername"></mt-field>
        <mt-field  placeholder="请输入密码" :state="formStateP" type="password" v-model="loginForm.Password" @blur.native.capture="checkPassword"></mt-field>
        <mt-field placeholder="记住密码" readonly>
            <mt-switch v-model="value"></mt-switch>
        </mt-field>
        <mt-button type="primary" size="large" @click="subMes">登录</mt-button>
        <mt-popup  v-model="popupVisible" position="top">{{popMessage}}</mt-popup>
    </div>
</template>
<script>
import { userCheck, passCheck } from '../../utils/validate'
export default {
  data () {
    return {
      loginForm: {
        Username: '',
        Password: ''
      },
      formStateU: '',
      formStateP: '',
      value: false,
      popupVisible: false,
      popMessage: ''
    }
  },
  mounted () {
    const info = localStorage.getItem('resember')
    if (info) {
      this.value = true
      this.loginForm.Username = localStorage.getItem('name')
      this.loginForm.Password = localStorage.getItem('password')
    }
  },
  methods: {
    async checkUsername () {
      const info = userCheck(this.loginForm.Username)
      if (!info) {
        this.popupVisible = true
        this.popMessage = '请输入正确的用户名！'
        this.formStateU = 'error'
        setTimeout(() => {
          this.popupVisible = false
        }, 1500)
        return false
      }
      this.formStateU = 'success'
      return true
    },
    async checkPassword () {
      const mes = passCheck(this.loginForm.Password)
      if (!mes) {
        this.popupVisible = true
        this.popMessage = '请输入正确的密码！'
        this.formStateP = 'error'
        setTimeout(() => {
          this.popupVisible = false
        }, 1500)
        return false
      }
      this.formStateP = 'success'
      return true
    },
    async subMes () {
      this.checkUsername().then(resU => {
        if (resU) {
          this.checkPassword().then(async (resP) => {
            if (resP) {
              if (this.value) {
                localStorage.setItem('resember', true)
                localStorage.setItem('name', this.loginForm.Username)
                localStorage.setItem('password', this.loginForm.Password)
              } else {
                localStorage.removeItem('resember')
                localStorage.removeItem('name')
                localStorage.removeItem('password')
              }
              await this.$action('userLogin', this.loginForm).then(response => {
                if (response) {
                  sessionStorage.setItem('token', response['Token'])
                  this.$router.push({path: '/device'})
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>
<style>
    .v-modal{
       height: 10% !important;
    }
    .mint-popup-top{
        top: 3%;
        background-color: none;
        color: rgba(255, 187, 0, 0.692);
        opacity: 0.8;
    }
</style>
