// 装饰器
// ref: https://github.com/buunguyen/route-decorators

'use strict'
const PREFIX = '$$route_'
import bodyParser from 'body-parser'
const jsonParser = bodyParser.json()

function destruct(args) {
  const hasPath = typeof args[0] === 'string'
  const path = hasPath ? args[0] : ''

  const hasRole = typeof args[1] === 'string'
  const role = hasRole ? args[1] : null

  
  let middleware = args
  if(hasPath){
    middleware = args.slice(1)
  }
  if(hasRole){
    middleware = args.slice(2)
  }
  if (middleware.some(m => typeof m !== 'function')) {
    throw new Error('Middleware must be function')
  }

  return [path, role, middleware]
}

// module.exports
// @route(method, path: optional, role=optional, ...middleware: optional)
export function route(method, ...args) {
  if (typeof method !== 'string') {
    throw new Error('The first argument must be an HTTP method')
  }

  const [path, role, middleware] = destruct(args)
  
  return function (target, name) {
    target[`${PREFIX}${name}`] = {method, path, role, middleware}
  }
}

// @[method](...args) === @route(method, ...args)
const methods = ['head', 'options', 'get', 'post', 'put', 'patch', 'del', 'delete', 'all']
methods.forEach(method => exports[method] = route.bind(null, method))


// @controller(path: optional, ...middleware: optional)
export function controller(...args) {
  const [ctrlPath, role, ctrlMiddleware] = destruct(args)

  return function (target) {
    const proto = target.prototype
    proto.$routes = Object.getOwnPropertyNames(proto)
      .filter(prop => prop.indexOf(PREFIX) === 0)
      .map(prop => {
        const {method, path, role, middleware: actionMiddleware} = proto[prop]
        const url = `${ctrlPath}${path}`
        const middleware = ctrlMiddleware.concat(actionMiddleware, jsonParser)
        const fnName = prop.substring(PREFIX.length)
        return { method: method === 'del' ? 'delete' : method, url, role, middleware, fnName }
      })
  }
}
