'use strict';
// 注册所有 Controller 的路由

import UserCtrl from './UserCtrl'
// Step1: 新的Controller可在这里 import
import TestCtrl from './TestCtrl'

const controllers = [
    UserCtrl,
    // Step2: 将Ctrl类名列入数组
    TestCtrl
]

export default function registerCtrl(app){
    for (const Ctrl of controllers) {
        let obj = new Ctrl()
        if(!obj || !obj.router) {
            console.error("没有发现任何路由", Ctrl)
        }
        else {
            app.use( obj.router )
        }
    }
}

