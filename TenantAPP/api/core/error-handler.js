//错误处理
'use strict'

function errorHandler(err, req, res, next){
    if(!err) {
        return next()
    }
    // Error message
    const message   = err.message
    // httpCode: HTTP status code
    const httpCode  = err.httpCode || 500
    // Error code
    const code      = err.code || httpCode
    // console.log('error occur:', httpCode, code, message)
    res.status(httpCode).send({ code, message })
}

export default  errorHandler