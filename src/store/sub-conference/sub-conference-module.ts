import { Module } from "vuex";

const subconferenceModule: Module<any, any> = {
  namespaced: true,
  state: {
    conferences: {},
    current: null,
  },
  mutations: {
    setSubconferences(state, payload) {
      state.conferences = payload;
    },
    setCurrentSubconference(state, payload) {
      state.current = payload;
    },
  },
  actions: {
    alterSubconferences({ commit }, payload) {
      commit("setSubconferences", payload);
    },
    alterCurrentSubconference({ commit }, payload) {
      commit("setCurrentSubconference", payload);
    },
  },
  getters: {
    getById: (state) => (id: string) => state.conferences[id],
    getAsList: (state) => Object.values(state.conferences),
  },
};

export default subconferenceModule;
