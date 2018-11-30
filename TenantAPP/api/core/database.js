import { MongoDB, DbConStr} from '../config'
const mongoose = require('mongoose')
/*
to remove the waining:
DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated
*/
mongoose.Promise = global.Promise;

function dbConnect(_owner='restful'){

  const con = mongoose.connection;
  const owner = _owner;

  if(MongoDB.support !== true){
      console.log("当前环境不支持mongodb数据库")
      return false
  }
  con.once('open' ,() => {
    console.log(owner+' 连接数据成功')
  });

  con.on('error', function(error) {
    console.log(owner+' MongoDb数据库连接出错: ' + error);
    mongoose.disconnect();
  });

  con.on('close', function() {
    console.log(owner+ '数据库断开，重新连接数据库');
    mongoose.connect(DbConStr, {server:{auto_reconnect:true}});
  });

  return mongoose.connect(DbConStr);
}

export default dbConnect