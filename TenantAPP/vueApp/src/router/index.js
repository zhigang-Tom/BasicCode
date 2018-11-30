import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/index'),
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/device',
      name: 'device',
      component: () => import('@/views/device/index'),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/reACDetail',
      name: 'reACDetail',
      component: () => import('@/views/device/regACDetail'),
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/allRegAP',
      name: 'allRegAP',
      component: () => import('@/views/device/regAllAP'),
      meta: {
        keepAlive: false // 不需要被缓存
      }
    }
  ]
})
