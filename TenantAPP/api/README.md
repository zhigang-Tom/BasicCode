# Exprestful

Best Practice for RESTful lib base on express.

基于 Express 的 RESTful API 最佳实践。

最新版本: 1.0.0

## Feature List

### Supported

1. ✔ 项目管理: 使用Nodemon与babel-node开发；使用webpack打包发布项目
1. ✔ Cross domain: 跨域访问
1. ✔ Controller register: Ctrl类注册
1. ✔ Router decorator: 使用装饰器注册路由
1. ✔ API document: 使用 apidoc 生成文档 (npm install -g apidoc)
1. ✔ Hide parameter: 将每个API的参数 req, res 放到 this 中隐藏起来
1. ✔ Return json encode: 返回值自动转为res.json
1. ✔ Method calling: Ctrl类中的成员函数可以互相调用
1. ✔ API Profiling: 对记录每个API的消耗时间
1. ✔ Exception handler: HTTP Code 与错误处理
1. ✔ Token access: 支持JWT(JSON Web Token)
1. ✔ Role access: 支持访问角色自动验证
1. ✔ Mongodb in Docker: [使用Doker部署mongodb 数据库](http://liuguixue.com/15195518329421.html)
1. ✔ Mongoose Usage: Mongodb使用范例
1. ✔ Paging: 分页
1. ✔ Unit test: 单元测试
1. ✔ Postman testing: Postman 功能测试脚本
1. ✔ Deploy by docker: 用Docker部署本项目

### Roadmap


1. ♨ Work with [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 


## File Tree

 * index.js  项目入口
 * ctrl [目录] 控制器代码
 * core [目录] 工具与middleware
 * doc  [目录] 文档
 * logs [目录] 日志目录，运行时产生
 * data [目录] 数据目录，含数据库文件，没有加入git
 * test [目录] 测试目录，含单元测试与功能测试

## Usage

安装 node v9.5

### 首次运行:

    npm install -g nodemon babel-cli
    npm install

    // 如使用docker：

    docker-compose build

* 运行服务器

    npm start

    // 如使用 Docker 运行列子
    docker-compose up

* 单元测试用例

    npm test
