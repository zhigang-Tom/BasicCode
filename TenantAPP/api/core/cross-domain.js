'use strict';
//支持跨域
const corssDomain = (req, res, next) => {
    // TODO: 部署时*应该换成前端静态站点的部署地址
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Credentials", true) //可以带cookies
    res.header("X-Powered-By", '3.2.1')
    if (req.method == 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
}

export default corssDomain