import { Module } from "vuex";

const fileShareModule: Module<any, any> = {
  namespaced: true,
  state: {
    shares: {},
    creating: false,
    editing: false,
    selectedShare: null,
  },
  mutations: {
    setShares(state, payload) {
      state.shares = payload;
    },
    markAsOpened(state, payload: string) {
      state.shares[payload] = true;
    },
    alterCreating(state, payload: boolean) {
      state.creating = payload;
    },
    alterDocumentFilter(state, payload: string) {
      state.documentFilter = payload;
    },
    alterSelectedShare(state, payload) {
      state.selectedShare = payload;
    },
    alterEditing(state, payload) {
      state.editing = payload;
    },
  },
  actions: {
    alterShares({ commit }, payload) {
      commit("setShares", payload);
    },
    markOpened({ commit }, payload) {
      commit("markAsOpened", payload.id);
    },
    setCreating({ commit }, payload) {
      commit("alterCreating", payload.creating);
    },
    setDocumentFilter({ commit }, payload) {
      commit("alterDocumentFilter", payload);
    },
    setEditing({ commit }, payload) {
      commit("alterEditing", payload);
    },
    setSelectedShare({ commit }, payload) {
      commit("alterSelectedShare", payload);
    },
  },
  getters: {
    getById: (state) => (id: string) => state.shares[id],
    getAsList: (state) => Object.values(state.shares),
    getSharesBelongingToOwner: (state) => (id: string) =>
      Object.values(state.shares).filter((s: any) => s.ownerId === id),
    getUnopened: (state) => (id: string) =>
      Object.values(state.shares).filter(
        (s: any) => s.opened === false && s.ownerId !== id
      ),
    getOpenedSharesNotBelongingToOwner: (state) => (id: string) =>
      Object.values(state.shares).filter(
        (s: any) => s.opened === true && s.ownerId !== id
      ),
    getUnOpenedSharesNotBelongingToOwner: (state) => (id: string) =>
      Object.values(state.shares).filter(
        (s: any) => s.opened === false && s.ownerId !== id
      ),
  },
};

export default fileShareModule;
