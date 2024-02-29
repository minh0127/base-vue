import BaseApi from './BaseApi';

const baseUrl = 'api/v1';

class CarApi extends BaseApi {
  getCar({ params }) {
    const searchParams = new URLSearchParams(params);
    return this.axios.get(this.baseUrl + `/cars?${searchParams.toString()}`).catch((error) => {
      throw new Error(error);
    });
  }

  getCarItem({ id }) {
    return this.axios.get(this.baseUrl + `/cars/${id}`).catch((error) => {
      throw new Error(error);
    });
  }

  updateCar({ id, data }) {
    return this.axios
      .post(this.baseUrl + `/cars/${id}`, { ...data, _method: 'put' })
      .catch((error) => {
        throw new Error(error);
      });
  }

  createCar({ data }) {
    return this.axios.post(this.baseUrl + `/cars`, data).catch((error) => {
      throw new Error(error);
    });
  }

  deleteCar({ id }) {
    return this.axios.delete(this.baseUrl + `/cars/${id}`).catch((error) => {
      throw new Error(error);
    });
  }
}

export default new CarApi(baseUrl);
