import { Module } from "vuex";

export enum EntryMode {
  LOADING = "Loading",
  PASSCODE = "Passcode",
  NAME = "Name"
}

const entryModule: Module<any, any> = {
  namespaced: true,
  state: {
    phase: null,
  },
  mutations: {
    setEntryPhase(state, newPhase: EntryMode) {
      state.phase = newPhase;
    },
  },
  actions: {
    alterEntryPhase({ commit }, phase: EntryMode) {
      commit("setEntryPhase", phase);
    },
  },
};

export default entryModule;
