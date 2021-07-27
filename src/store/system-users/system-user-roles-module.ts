import {
  SystemUserRole,
  SystemUserRoleName,
  SystemUserRoleType,
} from "@/model/admin/system-users/system-user-role";
import { Module } from "vuex";

const systemUserRoles: {
  [key: string]: SystemUserRole;
} = {
  SUR1: {
    id: "SUR1",
    name: SystemUserRoleName.ADMIN,
    type: SystemUserRoleType.ADMIN,
  },
  SUR2: {
    id: "SUR2",
    name: SystemUserRoleName.MODERATOR,
    type: SystemUserRoleType.MODERATOR,
  },
  SUR3: {
    id: "SUR3",
    name: SystemUserRoleName.MANAGER,
    type: SystemUserRoleType.MANAGER,
  },
  SUR4: {
    id: "SUR4",
    name: SystemUserRoleName.SUPPORT,
    type: SystemUserRoleType.SUPPORT,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const systemUserRolesModule: Module<any, any> = {
  namespaced: true,
  state: {
    systemUserRoles: systemUserRoles,
  },
  mutations: {
    setSystemUserRoles(
      state,
      payload: {
        [key: string]: SystemUserRole;
      }
    ) {
      state.systemUserRoles = payload;
    },
  },
  actions: {
    loadAllSystemUserRoles(mutations) {
      // TODO: Make call to API passing in payload
      const roles = {};

      // Save response to state
      mutations.commit("setSystemUserRoles", roles);
    },
  },
  getters: {
    getById: (state) => (id: string) => {
      return state.systemUserRoles[id];
    },
    getAsList: (state) => Object.values(state.systemUserRoles),
  },
};

export default systemUserRolesModule;
