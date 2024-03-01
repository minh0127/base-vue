import router from '@/router';
import Cookies from 'js-cookie';

const tokenKey = 'token';

export function isLogged() {
  return !!getToken();
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
