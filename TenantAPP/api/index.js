'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import crossDomain from './core/cross-domain'
import { registerToken } from './core/token'
import errorHandler from './core/error-handler'
import registerCtrl from './ctrl/index'

 // import { MongoDB } from './config'
import dbConnect from './core/database'

function main(port = 8001){
    const app = express()
    app.use(crossDomain)
    app.use(registerToken())
    app.use(bodyParser.json({ type: 'application/*+json' }))

    // 连接数据库
    dbConnect()

    // 注册
    registerCtrl(app)
    app.use(errorHandler)
    app.listen(port)

    console.log("server start")

    return app
}

main()
