'use strict'
import BaseCtrl from '../core/BaseCtrl'
import { getToken } from '../core/token'
import {controller, get, post, put, del} from '../core/decorator'
import UserModel from '../model/UserModel'
import hex_md5 from '../core/hex_md5'
import {UserRoles} from '../config'
import {UserLogic} from '../logic/UserLogic'
@controller('/user')
export default class UserCtrl extends BaseCtrl {


    /**
     * @api {get} /v1/user/list
     * @apiGroup User
     * @apiDescription 获取所有用户
     * @apiName list
     *
     * @apiError {ERR} 401-1 需要传入用户令牌Token
     * @apiError {ERR} 401-2 此操作需要管理员权限
     * @apiError {OK} 200 返回当前User列表
     *
     */
    @get('/list', 'admin')
    async list() {
        console.log('paging', this.limit, this.offset)
        return await UserModel.find({}, "-Password").sort({'ID': 1}).skip(this.offset).limit(this.limit)
    }

    /**
     * @api {get} /v1/user
     * @apiGroup User
     * @apiDescription 新建用户
     * @apiName add
     * 
     * @apiParam {Object} User  用户对象
     * 
     * @apiError {ERR} 400-1 用户名不得为空
     * @apiError {ERR} 400-2 密码不得为空
     * @apiError {ERR} 400-3 用户角色不正确
     * @apiError {ERR} 406 这个用户名已经被使用了请换一个
     * 
     * @apiError {OK} 200 返回新增的 User 对象
     */ 

    @get('/info/:id', 'admin')
    async _info(){
        const id = this.req.params.id
        return 'UserCtrl.info'+id
    }

    /**
     * @api {post} /v1/user
     * @apiGroup User
     * @apiDescription 新建用户
     * @apiName add
     * 
     * @apiParam {Object} User  用户对象
     * 
     * @apiError {ERR} 400-1 用户名不得为空
     * @apiError {ERR} 400-2 密码不得为空
     * @apiError {ERR} 400-3 用户角色不正确
     * @apiError {ERR} 406 这个用户名已经被使用了请换一个
     * 
     * @apiError {OK} 200 返回新增的 User 对象
     */ 
    @post('', 'admin')
    async add() {
        let logic = new UserLogic(this)  // this 表示 UserCtrl 的对象
        return await logic.add(this.req.body)
    }

    /**
     * @api {post} /v1/user/login
     * @apiGroup User
     * @apiDescription 用户登陆
     * @apiName login
     *
     * @apiParam {String} Username 用户名
     * @apiParam {String} Password 密码
     *
     * @apiError {ERR} 400-1 用户名不得为空
     * @apiError {ERR} 400-2 密码不得为空
     * @apiError {ERR} 401 用户名或密码不正确
     * @apiError {ERR} 403 此用户还未激活，请联系管理员
     * @apiError {ERR} 403-2 此用户已过期，请联系管理员
     * @apiError {ERR} 404 没有找到此用户
     * @apiError {OK} 200 返回当前User对象(含Token)
     *
     */
    @post('/login')
    async login(){

        const { Username, Password } = this.req.body

        if(!Username){
            return this.clientError('用户名不得为空')
        }
        if(!Password){
            return this.clientError('密码不得为空')
        }

        let pass  = hex_md5(Password)
        let user =  await UserModel.findOne({ "Username": Username })
        if (!user) {
            return this.notFound('没有找到此用户');
        }

        if (user.Password !== pass) {
            return this.unauthorized('用户名或密码不正确');
        }
        
        // 登陆成功，返回：用户信息 + Token

        user.Token = getToken(user._id, user.Role, 'none')
        user.LastLogin = new Date()
        await user.save()

        // 移除 Password
        user.Password = undefined
        return user
    }

    /* 
     * 验证权限访问,测试
     */
    @get('/role','user, super')
    async _role(){
        return this.req.jwt
    }
}
