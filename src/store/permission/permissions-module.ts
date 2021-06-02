import { Role } from "@/model/meeting/meeting-ui/side-bar/participants/participant-permission";
import { Module } from "vuex";
const ROLES: { [key: string]: Role } = {
  r1: {
    id: "r1",
    name: "Admin",
    permissions: [],
  },
  r2: {
    id: "r2",
    name: "Moderator",
    permissions: [],
  },
  r3: {
    id: "r3",
    name: "Standard User",
    permissions: [],
  },
  r4: {
    id: "r4",
    name: "Support",
    permissions: [],
  },
  r5: {
    id: "r5",
    name: "God Mode",
    permissions: [],
  },
};

const permissionsModule: Module<any, any> = {
  namespaced: true,
  state: {
    roles: ROLES,
    permissions: {},
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
