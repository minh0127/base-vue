import AuthApi from '@/api/AuthApi';
import { setToken } from '@/utils/auth';

const state = {};
const mutations = {};
const actions = {
  async login(_, data) {
    const res = await AuthApi.login(data);
    if (res.data) {
      setToken(res.data.access_token);
    }
    return res;
  },
  async register(_, data) {
    const res = await AuthApi.register(data);
    return res;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
