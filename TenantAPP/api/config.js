// 用户 TOKEN 产生时计算KEY
export const TokenKey = "##JWT-KEY@@"

// 用户允许的所有 访问角色
export const UserRoles = ['super', 'admin', 'user']

// 配置: 开发环境
const DevEnv = {
    database: "SoarDB"
  }

export const MongoDB= {
    support : true,     //可以开关
    database: DevEnv.database,
    host: "dds-bp1d0ec7c811df94-pub.mongodb.rds.aliyuncs.com",
    port: "3717",
    username: "admin",
    password: "soar456123"
}

//数据库连接字符串，根据MongoDB配置组成
export const DbConStr = `mongodb://${MongoDB.username}:${MongoDB.password}@${MongoDB.host}:${MongoDB.port}/${MongoDB.database}?authSource=admin`