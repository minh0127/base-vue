import router from '@/router';
import Cookies from 'js-cookie';
// import axios from 'axios';

const tokenKey = 'token';

export function isLogged() {
  // console.log('check token');
  if (getToken() === undefined) {
    return false;
  }
  return true;
}

export function setToken(token) {
  return Cookies.set(tokenKey, token);
}

export function removeToken() {
  return Cookies.remove(tokenKey);
}

export function getToken() {
  return Cookies.get(tokenKey);
}

export function logout() {
  removeToken();
  router.push('/auth/login');
}
