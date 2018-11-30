import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import device from './modules/device'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    login,
    device
  }
})

export default store
