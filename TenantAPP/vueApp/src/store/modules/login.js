import rest from '../rest'
const login = {
  actions: {
    userLogin ({ commit }, params) {
      return rest.post('/v1/user/login', params)
    }
  }
}
export default login
