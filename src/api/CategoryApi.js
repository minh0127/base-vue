import BaseApi from './BaseApi';

const baseUrl = 'api/v1';

class CategoryApi extends BaseApi {
  getCategory({ page }) {
    return this.axios.get(this.baseUrl + `/categories?page=${page}`).catch((error) => {
      throw new Error(error);
    });
  }

  getItem({ id }) {
    return this.axios.get(this.baseUrl + `/categories/${id}`).catch((error) => {
      throw new Error(error);
    });
  }

  updateCategory({ id, data }) {
    return this.axios.put(this.baseUrl + `/categories/${id}`, data).catch((error) => {
      throw new Error(error);
    });
  }

  createCategory({ data }) {
    return this.axios.post(this.baseUrl + `/categories`, data).catch((error) => {
      throw new Error(error);
    });
  }

  deleteCategory({ id }) {
    return this.axios.delete(this.baseUrl + `/categories/${id}`).catch((error) => {
      throw new Error(error);
    });
  }
}

export default new CategoryApi(baseUrl);
