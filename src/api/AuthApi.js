import BaseApi from './BaseApi';
import { AUTH_API } from '@/utils/constants/api';
import { HttpError, HttpResponse } from '@/utils/http';

const baseUrl = AUTH_API;

class AuthApi extends BaseApi {
  async login(data) {
    try {
      const response = await this.axios.post(this.baseUrl + '/login', data);
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }

  async register(data) {
    try {
      const response = await this.axios.post(this.baseUrl + '/register', data);
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }
}

export default new AuthApi(baseUrl);
