<template>
    <div>
        <mt-header fixed  title="AC详细信息">
          <router-link to="/device" slot="left">
             <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <mt-cell style="text-align:left;" title="AC别名" :value="acAlias"></mt-cell>
        <mt-cell style="text-align:left;" title="当前AP数" :value="acAPNum"></mt-cell>
        <mt-cell style="text-align:left;" title="MAC" :value="acMAC | parseMAC"></mt-cell>
        <mt-cell style="text-align:left;" title="序列号" :value="acSN"></mt-cell>
        <mt-cell style="text-align:left;" title="认证有效期" :value="acEndTime | parseTime"></mt-cell>
        <mt-button type="primary" size="large" @click.native="showAP" >显示所属AP</mt-button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatTime, formatMAC } from '../../utils/validate'
export default {
  data () {
    return {
      acAlias: '',
      acMAC: '',
      acSN: '',
      acAPNum: '',
      acEndTime: '',
      parentId: ''
    }
  },
  computed: {
    ...mapGetters({
      registerDev: 'registerDev'
    })
  },
  created () {
    const searchID = this.$route.query.ID
    this.fetchDta(searchID)
  },
  filters: {
    parseMAC (val) {
      const ret = formatMAC(val)
      return ret
    },
    parseTime (val) {
      const time = formatTime(val)
      return time[0]
    }
  },
  methods: {
    async fetchDta (ID) {
      let filter = { Parent: ID }
      await this.$action('GetReAPCount', filter).then(res => {
        this.acAPNum = res.count
      })
      for (const item of this.registerDev) {
        if (item['_id'] === ID) {
          this.acAlias = item['Alias']
          this.acMAC = item['MAC']
          this.acSN = item['SN']
          this.acEndTime = item['EndTime']
          this.parentId = ID
          break
        }
      }
    },
    async showAP () {
      this.$router.push(
        {
          path: '/allRegAP',
          query: { PID: this.parentId }
        })
    }
  }
}
</script>
