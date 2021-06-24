import { SystemUser } from "@/model/admin/system-users/system-user";
import { SystemUserRoleName } from "@/model/admin/system-users/system-user-role";
import { Module } from "vuex";

const systemUsers: {
  [key: string]: SystemUser;
} = {
  "SU1": {
    id: "SU1",
    name: "System User 1 (Admin)",
    role: {
        id: 'SUR1',
        name: SystemUserRoleName.ADMIN,
    },
    organizationIds: ["o1"],
    email: "fake@gmail.com",
    roomPermissions: {
      allRooms: true,
      roomIds: [],
      organizationIds: []
    },
    phone: '203-575-1020',
    pstnPIN: 1234,
  },
  "SU2": {
    id: "SU2",
    name: "System User 2 (Moderator)",
    role: {
        id: 'SUR2',
        name: SystemUserRoleName.MODERATOR,
    },
    organizationIds: [],
    email: "fake@gmail.com",
    roomPermissions: {
      allRooms: false,
      roomIds: ["R1", "R2", "R3"],
      organizationIds: ["o1", "o2"]
    },
    phone: '203-575-1020',
    pstnPIN: 1234,
  },
  "SU3": {
    id: "SU3",
    name: "System User 3 (Manager)",
    role: {
        id: 'SUR3',
        name: SystemUserRoleName.MANAGER,
    },
    organizationIds: [],
    email: "fake@gmail.com",
    roomPermissions: {
      allRooms: false,
      roomIds: ["R1"],
      organizationIds: ["o1", "o2"]
    },
    phone: '203-575-1020',
    pstnPIN: 1234,
  },
  "SU4": {
    id: "SU4",
    name: "System User 4 (Support)",
    role: {
        id: 'SUR4',
        name: SystemUserRoleName.SUPPORT,
    },
    organizationIds: [],
    email: "fake@gmail.com",
    roomPermissions: {
      allRooms: false,
      roomIds: ["R1"],
      organizationIds: []
    },
    phone: '203-575-1020',
    pstnPIN: 1234,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const systemUsersModule: Module<any, any> = {
  namespaced: true,
  state: {
    systemUsers: systemUsers,
  },
  mutations: {
    addSystemUser(state, payload: SystemUser) {
      state.systemUsers[payload.id] = payload;
    },
    removeSystemUser(state, payload: SystemUser) {
      state.systemUsers[payload.id] = undefined;
    },
    updateSystemUser(state, payload: SystemUser) {
      state.systemUsers[payload.id] = payload;
    },
  },
  actions: {
    addSystemUser(mutations, payload: SystemUser) {
      // TODO: Make call to API passing in payload

      // Save response to state
      mutations.commit('addSystemUser', payload);
    },
    updateSystemUser(mutations, payload: SystemUser) {
      // TODO: Make call to API passing in payload

      // Save response to state
      mutations.commit('updateSystemUser', payload);
    },
  },
  getters: {
    getById: (state) => (id: string) => {
      return state.systemUsers[id];
    },
    getAsList: (state) => Object.values(state.systemUsers),
  },
};

export default systemUsersModule;
