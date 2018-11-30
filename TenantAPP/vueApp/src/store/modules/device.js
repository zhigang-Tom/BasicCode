import rest from '../rest'
const device = {
  state: {
    devices: [],
    registerDev: [], // 已注册设备
    unregisterDev: [], // 未注册设备
    registerAP: [] // AC所属AP
  },
  getters: {
    registerDev: (state) => {
      state.devices.forEach(item => {
        if (item['Type'] === 1 && item['Registered']) {
          state.registerDev.push(item)
        }
      })
      return state.registerDev
    },
    unregisterDev: (state) => {
      state.devices.forEach(ele => {
        if (!ele['Registered']) {
          state.unregisterDev.push(ele)
        }
      })
      return state.unregisterDev
    },
    registerAP: (state) => {
      state.devices.forEach(item => {
        if (item['Type'] === 2 && item['Registered']) {
          state.registerAP.push(item)
        }
      })
      return state.registerAP
    }
  },
  actions: {
    // 获取已注册与未注册设备信息
    DeviceList ({ commit }, params) {
      return rest.get('/v1/device/list', { params: params }, commit, 'DEVICE_LIST')
    },
    // 获取AC当前已注册AP数目
    GetReAPCount ({ commit }, params) {
      return rest.get('/v1/device/reapcount', { params: params })
    },
    // 获取AC下所属AP
    DeviceRegAP ({ commit }, params) {
      return rest.get('/v1/device/list', { params }, commit, 'DEVICE_AP_LIST')
    }
  },
  mutations: {
    DEVICE_LIST (state, res) {
      console.log(res)
      state.devices = res['list']
      // if (res['list'].length > 0) {
      //   let item = res['list'][0]
      //   if (item['Registered']) {
      //     state.registerDev = res['list']
      //   } else {
      //     state.unregisterDev = res['list']
      //   }
      // }
    },
    DEVICE_AP_LIST (state, data) {
      console.log('DEVICE_AP_LIST', data)
      data['list'].forEach(ele => {
        let pair = {}
        pair['Alias'] = ele['Alias']
        pair['Online'] = ele['Online']
      })
    }
  }
}

export default device
