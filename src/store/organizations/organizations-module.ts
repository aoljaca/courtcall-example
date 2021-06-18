import { Organization } from "@/model/admin/organization/organization";
import { Module } from "vuex";

const ORGANIZATIONS: { [key: string]: Organization } = {
  o1: {
    name: "Walmart Inc",
    managerIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    location: "Bentonville, AR",
    id: "o1",
    roomIds: ["R1", "R2", "R3"],
    archived: false,
  },
  o2: {
    name: "China Petroleum & Chemical Corp.",
    managerIds: ["3", "4"],
    id: "o2",
    roomIds: ["R4", "R5"],
    location: "Beijing, China",
    archived: false,
  },
  o3: {
    name: "Amazon.com Inc",
    managerIds: ["5"],
    location: "Seattle, WA",
    roomIds: ["R6"],
    archived: false,
    id: "o3",
  },
  o4: {
    name: "PetroChina Co, LTD",
    id: "o4",
    managerIds: ["6", "7"],
    location: "Beijing, China",
    roomIds: ["R7", "R8", "R9"],
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
    setOrganizations(state, organizations: Organization[]) {
      state.organizations = {};
      Object.values(organizations).forEach(
        (o) => (state.organizations[o.id] = o)
      );
    },
    setOrganization(state, organization: Organization) {
      state.organizations[organization.id] = organization;
    },
    setSelectedOrganization(state, organizationToSelect: string) {
      state.selectedOrganization = state.organizations[organizationToSelect];
    },
  },
  actions: {
    onSelectOrganization({ commit }, organizationToSelect) {
      commit("setSelectedOrganization", organizationToSelect);
    },
    onCreateOrganization({ commit }, organizationToCreate) {
      // Send request to API to create
      const response = organizationToCreate;
      commit("setOrganization", response);
    },
    onUpdateOrganization({ commit }, organizationToUpdate) {
      // Send request to API to update
      const response = organizationToUpdate;
      commit("setOrganization", response);
    }
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
