import { Organization } from "@/model/admin/organization/organization";
import { Module } from "vuex";

const ORGANIZATIONS: { [key: string]: Organization } = {
  o1: {
    name: "Walmart Inc",
    managerIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    location: "Bentonville, AR",
    id: "o1",
    roomIds: ["1", "2", "3"],
    archived: false,
  },
  o2: {
    name: "China Petroleum & Chemical Corp.",
    managerIds: ["3", "4"],
    id: "02",
    roomIds: ["4", "5"],
    location: "Beijing, China",
    archived: false,
  },
  o3: {
    name: "Amazon.com Inc",
    managerIds: ["5"],
    location: "Seattle,WA",
    roomIds: ["6"],
    archived: false,
    id: "o3",
  },
  o4: {
    name: "PetroChina Co, LTD",
    id: "o4",
    managerIds: ["6", "7"],
    location: "Beijing, China",
    roomIds: ["7", "8", "9"],
    archived: false,
  },
  o5: {
    name: "Apple, Inc",
    id: "o5",
    managerIds: ["8", "9", "10"],
    location: "Cupertino, CA",
    roomIds: [],
    archived: true,
  },
  o6: {
    name: "CVS Health Corp.",
    id: "o6",
    managerIds: [],
    roomIds: [],
    archived: false,
    location: "Woonsocket, RI",
  },
  o7: {
    name: "Royal Dutch Shell PLC",
    id: "o7",
    managerIds: [],
    roomIds: [],
    archived: true,
    location: "The Hague, Netherlands",
  },
  o8: {
    name: "Berkshire Hathaway Inc",
    id: "o8",
    managerIds: [],
    roomIds: [],
    archived: false,
    location: "Omaha, NE",
  },
  o9: {
    name: "Toyota Motor Corp",
    id: "o9",
    managerIds: [],
    roomIds: [],
    archived: false,
    location: "Toyota,Aichi,Japan",
  },
  o10: {
    name: "Volkswagen AG",
    id: "o10",
    managerIds: [],
    roomIds: [],
    archived: false,
    location: "Wolfsburg, Germany",
  },
};

const organizationsModule: Module<any, any> = {
  namespaced: true,
  state: {
    organizations: ORGANIZATIONS,
    selectedOrganization: null,
  },
  mutations: {
    alterOrganization(state, payload: string) {
      state.selectedOrganization = state.organizations[payload];
    },
  },
  actions: {
    setOrganization({ commit }, payload) {
      commit("alterOrganization", payload);
    },
  },
  getters: {
    getById: (state) => (id: string) => {
      return state.organizations[id];
    },
    getAsList: (state) => Object.values(state.organizations),
    getActiveAsList: (state) =>
      (Object.values(state.organizations) as Organization[]).filter(
        (o) => !o.archived
      ),
  },
};

export default organizationsModule;
