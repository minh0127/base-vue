import request from '@/utils/request';

export default class BaseApi {
  constructor(baseUrl) {
    this.baseUrl = import.meta.env.VITE_APP_BASE_API + '/' + baseUrl;
    this.axios = request;
  }

  get(param = []) {
    return this.axios
      .get(this.baseUrl, {
        params: param,
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  find(id) {
    return this.axios.get(this.baseUrl + `/${id}`).catch((error) => {
      throw new Error(error);
    });
  }

  store(createData) {
    return this.axios.post(this.baseUrl, createData).catch((error) => {
      throw error;
    });
  }

  update(id, data) {
    return this.axios.patch(this.baseUrl + `/${id}`, data).catch((error) => {
      throw error;
    });
  }

  destroy(id) {
    return this.axios.delete(this.baseUrl + `/${id}`).catch((error) => {
      throw new Error(error);
    });
  }
}
