import Vue from "vue";

const state = {
  leftDrawer: true
};

const getters = {
  leftDrawer: state => state.leftDrawer
};

const actions = {
  toggleLeftDrawer({ commit }) {
    commit("toggleLeftDrawer");
  }
};

const mutations = {
  toggleLeftDrawer(state) {
    state.leftDrawer = !state.leftDrawer;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
