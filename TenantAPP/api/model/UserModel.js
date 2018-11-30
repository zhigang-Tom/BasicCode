'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({

  //用户ID, 自增序号
  ID: Number,

  //用户登陆名称
  Username: String,
  //用户登陆密码
  Password: String,

  //用户姓名
  Name: String,

  Role: { type: String, default: 'user' },
  // 注册时间 
  CreateTime: Date,
  // 用户状态: 0:未激活，1: 正常，2：禁用
  Status: { type: Number, default: 1 },

  // 登陆成功后保存的 Token， 如果为 NULL 说明没有登陆
  Token:  { type: String, default: null },
  
  LastLogin: Date,
  // 备注
  Remark: String
});

schema.index({ ID: -1});
schema.index({ Tenant: 1});

schema.pre('save', function(next) {
  var self = this;
  if( self.isNew ) {
    UserModel.find().sort('-ID').limit(1).select('ID').exec((err, result)=>{
      if (err){ throw err;}
      self.CreateTime = new Date();
      if(result[0])
        self.ID = result[0].ID+1;
      else
        self.ID = 1
      next()
    });
  } else {
    next()
  }
})
const UserModel = mongoose.model('User', schema)
export default UserModel
