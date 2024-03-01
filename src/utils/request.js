import { getToken, removeToken } from '@/utils/auth';
import axios from 'axios';
// Create axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000, // Request timeout
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + getToken(); // Set JWT token
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response pre-processing
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async(error) => {
    if (error.response.status === 401) {
      await removeToken();
    }

    return Promise.reject(error);
  },
);

export default service;
