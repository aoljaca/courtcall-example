import { Module } from "vuex";

const entryModule: Module<any, any> = {
  namespaced: true,
  state: {
    phase: "passcode",
  },
  mutations: {
    changeEntryPhase(state: any, payload) {
      state.phase = payload;
    },
  },
  actions: {
    alterEntryPhase({ commit }, payload) {
      commit("changeEntryPhase", payload.phase);
    },
  },
};

export default entryModule;
