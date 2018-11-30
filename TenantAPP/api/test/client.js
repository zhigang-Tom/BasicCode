const axios = require('axios')
const BASE_IP = "http://localhost:8001"

async function request(method,url, data){
    try {
        return await axios[method](url,data);
    } catch (error) {
        return error['response'];
    }
}

exports.get = async function(url, data){
    return await request('get', url, data);
}
exports.post = async function(url, data){
    return await request('post', url, data);
},
exports.put = async function(url, data){
    return await request('put', url, data);
}
exports.del =async function(url, data){
    return await request('delete', url, data);
}

exports.url = function(path, token=null){
    let query = token?`?token=${token}`:'';
    return `${BASE_IP}/${path}${query}`;
}