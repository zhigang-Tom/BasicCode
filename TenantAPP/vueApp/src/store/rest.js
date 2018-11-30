const axios = require('axios')
axios.defaults.baseURL = process.env.BASE_API
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/json'

function sessionToken () {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  }
}
const rest = {
  request (method, uri, data, commit, commitStr) {
    sessionToken()
    return new Promise((resolve, reject) => {
      method(uri, data).then(response => {
        const result = response.data
        if (commitStr) {
          if (typeof (commitStr) === 'string') {
            commit(commitStr, result)
          } else if (Array.isArray(commitStr)) {
            for (const cmit of commitStr) {
              commit(cmit, result)
            }
          }
        }
        resolve(result)
      }).catch(error => {
        console.log(error.response)
        if (error.response) {
          reject(error.response)
        } else if (error.message) {
          reject(error.message)
        }
      })
    })
  },

  get (uri, data, commit, commitStr) {
    return rest.request(axios.get, uri, data, commit, commitStr)
  },

  post (uri, data, commit, commitStr) {
    return rest.request(axios.post, uri, data, commit, commitStr)
  },

  put (uri, data, commit, commitStr) {
    return rest.request(axios.put, uri, data, commit, commitStr)
  },

  delete (uri, data, commit, commitStr) {
    return rest.request(axios.delete, uri, data, commit, commitStr)
  }
}

export default rest
