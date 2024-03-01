import { HttpError, HttpResponse } from '@/utils/http';
import request from '@/utils/request';

export default class BaseApi {
  constructor(baseUrl) {
    this.baseUrl = import.meta.env.VITE_APP_BASE_API + '/' + baseUrl;
    this.axios = request;
  }

  async get(params = {}) {
    try {
      const response = await this.axios.get(this.baseUrl, { params });
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }

  async find(id) {
    try {
      const response = await this.axios.get(this.baseUrl + `/${id}`);
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }

  async store(createData) {
    try {
      const response = await this.axios.post(this.baseUrl, createData);
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }

  async update(id, data) {
    try {
      const response = await this.axios.patch(this.baseUrl + `/${id}`, data);
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }

  async destroy(id) {
    try {
      const response = await this.axios.delete(this.baseUrl + `/${id}`);
      return new HttpResponse(response);
    } catch (error) {
      return new HttpError(error);
    }
  }
}
