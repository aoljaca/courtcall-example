import { Module } from "vuex";

const sidebarModule: Module<any, any> = {
  namespaced: true,
  state: {
    sidebar: "chat",
  },
  mutations: {
    changeSidebarMode(state: any, payload) {
      if (state.sidebar === payload) {
        state.sidebar = null;
      } else {
        state.sidebar = payload;
      }
    },
  },
  actions: {
    alterSidebarMode({ commit }, payload) {
      commit("changeSidebarMode", payload.sidebarMode);
    },
  },
};

export default sidebarModule;
