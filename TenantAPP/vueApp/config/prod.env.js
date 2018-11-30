'use strict'

// 配置: 发布环境
const ProdEnv = {
  apiAddress: '"http://api.soarnex.net"'
}

// 配置: 开发环境
const DevEnv = {
  apiAddress: '"http://192.168.99.253:8001"'
}

// 配置: TSD测试环境
const AllTest = {
  apiAddress: '"http://192.168.99.252:8001"'
}

module.exports = {
  NODE_ENV: '"production"',
  BASE_API: DevEnv.apiAddress,
  WEB_VERSION: 'v1.0.1'
}
