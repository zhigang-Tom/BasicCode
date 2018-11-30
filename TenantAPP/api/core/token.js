'use strict'
//Middleware: 支持 Token, 符合JWT规范
import express_jwt from 'express-jwt'
import jwt from 'jsonwebtoken'
import { TokenKey } from '../config'

export function registerToken(){
    return express_jwt({
        secret: TokenKey,
        credentialsRequired: false,
        getToken:  (req) =>{
            let token = null
            if (req.headers.authorization &&
                req.headers.authorization.split(' ')[0] === 'Bearer') {
                token = req.headers.authorization.split(' ')[1];
            } else if (req.query && req.query.token) {
                token = req.query.token
            }
            if (token) {
                //将token解析，放入 req.jwt 内
                let obj = jwt.verify(token, TokenKey)
                req.jwt = obj;
            }
            return token
        }
    })
}

export function getToken(uid, role=null, tenant=null) {
    //默认到期时间 30 days
    const exp = Math.floor(Date.now() / 1000) + (60 * 60*24*30)
    let obj = { uid, tenant, role, exp }
    return jwt.sign(obj, TokenKey)
}