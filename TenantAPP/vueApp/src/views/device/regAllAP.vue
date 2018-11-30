<template>
    <div>
        <mt-header fixed  title="所属AP">
          <router-link :to="{path:'/reACDetail',query: {ID: backId}}"  slot="left">
             <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <mt-cell style="text-align:left;" v-for="item in APList" :key="item._id" :title="item.Alias"  :value="item.Online | formatOnline"></mt-cell>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      APList: [],
      backId: '' // 父页面的id
    }
  },
  created () {
    const pid = this.$route.query.PID
    this.fetchData(pid)
  },
  computed: {
    ...mapGetters({
      registerAP: 'registerAP'
    })
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
    async fetchData (ID) {
      this.backId = ID
      this.registerAP.forEach(ele => {
        if (ele['Parent'] === ID) {
          this.APList.push(ele)
        }
      })
    }
  }
}
</script>
