import getters from './getters';
import { createStore } from 'vuex';
import * as modules from './modules/index';

const store = createStore({
  modules,
  getters,
});

export default store;
