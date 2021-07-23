import { Module } from "vuex";

const permissionsModule: Module<any, any> = {
  namespaced: true,
  state: {
    roles: {},
    permissions: {},
  },
  mutations: {
    setRoles(state, payload) {
      state.roles = payload;
    },
  },
  actions: {
    alterRoles({ commit }, payload) {
      commit("setRoles", payload);
    },
  },
  getters: {
    getRoleById: (state) => (id: string) => state.roles[id],
    getPermissionById: (state) => (id: string) => state.permissions[id],
    getPermissionsForRole: (state) => (id: string) => {
      const rolePermissions = state.roles[id]?.permissions as string[];
      if (!rolePermissions) {
        return [];
      }
      return rolePermissions
        .map((p) => state.permissions[p])
        .filter((obj) => obj != null);
    },
  },
};

export default permissionsModule;
