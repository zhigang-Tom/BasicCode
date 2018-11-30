'use strict'
import BaseCtrl from '../core/BaseCtrl'
import { controller, get, post, put, del} from '../core/decorator'

@controller('/test')
export default class TestCtrl extends BaseCtrl {

    @get('')
    async _get(){
        return 'connect success'
    }

    async _hello(){
        return 'hello'
    }

    @get('/method')
    async _method(){
        return await this._hello()
    }

    @post('/post')
    async _post(){
        console.log('req=', this.req.body)
        return this.req.body
    }

    @put('/put')
    async _put(){
        return this.req.body
    }

    @del('/del/:id')
    async _del(){
        return this.req.params.id
    }

    @get('/error/:code')
    async _error(){
        const code = this.req.params.code || 500
        this.error('error info', code)
    }
}
