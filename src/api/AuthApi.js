import BaseApi from './BaseApi';

const baseUrl = 'api/v1';

class AuthApi extends BaseApi {
  login(data) {
    return this.axios.post(this.baseUrl + '/login', data).catch((error) => {
      return error.response;
    });
  }
  register(data) {
    return this.axios.post(this.baseUrl + '/register', data).catch((error) => {
      return error.response;
    });
  }
}

export default new AuthApi(baseUrl);
