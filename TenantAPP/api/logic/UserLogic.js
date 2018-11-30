// 用户逻辑类
/* 
Logic类的作用是：当 Ctrl类中的函数太复杂时需要抽出来，方便维护

*/
class UserLogic{
    // ctrl 就是调用者Ctrl的对象，可以调用相应的Ctrl类及其父类的方法
    constructor(ctrl){
        this.ctrl = ctrl
    }

    async add(data){
        this.user = new UserModel(data)
        this._checkRequired()
        this._checkRole()
        await this._checkUnique()

        user.Password = hex_md5(user.Password)
        let doc = await user.save()
    }

    /* 传入的参数 不得为空 */
    _checkRequired(){
        if(!this.user.Username){
            return this.ctrl.clientError('用户名不得为空')
        }
        if(!this.user.Password){
            return this.ctrl.clientError('密码不得为空')
        }
        return true
    }

    /* 验证角色是否符合规范 */
    _checkRole(){
        if(this.user.Role && UserRoles.includes(this.user.Role)===false ){
            return this.ctrl.clientError('用户角色不正确')
        }
        return true
    }

    /* 用户名不得重复 */
    async _checkUnique(){
        let count = await UserModel.count({ Username: this.user.Username })
        if(count > 0){
            return this.ctrl.notAcceptable('这个用户名已经被使用了请换一个');
        }
        return true
    }
}

export default UserLogic