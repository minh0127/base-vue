// import '@/bootstrap';
// import { Message } from 'element-ui';
import { getToken, removeToken } from '@/utils/auth';
import axios from 'axios';
// Create axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000, // Request timeout
});
// Request intercepter
service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + getToken(); // Set JWT token
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error, 111111); // for debug
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  (response) => {
    // if (response.headers.authorization) {
    //   setLogged(response.headers.authorization);
    //   response.data.token = response.headers.authorization;
    // }

    return response.data;
  },
  async(error) => {
    if (error.response.status === 401) {
      await removeToken();
    }
    // let message = error.message;
    // if (error.response.data && error.response.data.errors) {
    //   message = error.response.data.errors;
    // } else if (error.response.data && error.response.data.error) {
    //   message = error.response.data.error;
    // }

    // Message({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000,
    // });
    console.log(error, 2222222); // for debug

    return Promise.reject(error);
  }
);

export default service;
