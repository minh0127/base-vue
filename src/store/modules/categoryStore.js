// store/index.js

import CategoryApi from '@/api/CategoryApi';

const state = {
  category: [],
  id: 0,
};
const mutations = {
  setCategory(state, data) {
    state.category = data;
  },
  setId(state, id) {
    state.id = id;
  },
};
const actions = {
  async getCategory({ commit }, { page }) {
    try {
      const response = await CategoryApi.getCategory({ page });
      commit('setCategory', response.data.items);
    } catch (error) {
      console.log(error);
    }
  },
  async updateCategory({ commit }, { id, data }) {
    try {
      await CategoryApi.updateCategory({ id, data });
    } catch (error) {
      console.log(error);
    }
  },
  async createCategory({ commit }, { data }) {
    try {
      await CategoryApi.createCategory({ data });
    } catch (error) {
      console.log(error);
    }
  },
  async deleteCategory({ commit }, { id }) {
    try {
      await CategoryApi.deleteCategory({ id });
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
