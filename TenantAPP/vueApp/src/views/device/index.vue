<template>
    <div>
        <mt-header fixed  title="设备列表"></mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="first">已注册设备</mt-tab-item>
            <mt-tab-item id="second">未注册设备</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="first">
                <mt-cell style="text-align:left;" v-for="item in registerData" :key="item._id" :title="item.Alias" :value="item.Online | formatOnline" :to="{ path:'/reACDetail', query:{ ID: item._id}}" is-link></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="second">
                <mt-cell style="text-align:left;" v-for="item in unregisterData" :key="item._id" :title="item.Alias" :value="item.Online | formatOnline" to="//github.com" is-link></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selected: 'first',
      registerData: [],
      unregisterData: []
    }
  },
  computed: {
    ...mapGetters({
      registerDev: 'registerDev',
      unregisterDev: 'unregisterDev'
    })
  },
  created () {
    this.fetchData()
  },
  filters: {
    formatOnline (val) {
      if (val) {
        return '在线'
      } else {
        return '离线'
      }
    }
  },
  methods: {
    async fetchData () {
      let info = {}
      if (this.selected === 'first') {
        info['Registered'] = true
      } else {
        info['Registered'] = false
      }
      await this.$action('DeviceList', info)
      this.registerData = this.registerDev
      this.unregisterData = this.unregisterDev
    }
  }
}
</script>
