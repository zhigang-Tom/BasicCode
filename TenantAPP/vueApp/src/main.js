// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(Mint)
// 添加实例方法 $action
Vue.prototype.$action = async function (name, param) {
  try {
    const result = await this.$store.dispatch(name, param)
    return result
  } catch (error) {
    console.error(error)
    return false
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
