import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Module } from "vuex";
const SUBCONFERENCES: { [key: string]: SubConference } = {
  "1": {
    sessionId: "1",
    systemName: "A",
    displayName: "Main Room",
    id: "1",
  },
  "2": {
    sessionId: "2",
    systemName: "B",
    displayName: "Subconference B",
    id: "2",
  },
  "3": {
    sessionId: "3",
    systemName: "C",
    displayName: "Subconference C",
    id: "3",
  },
  "4": {
    sessionId: "4",
    systemName: "D",
    displayName: "Subcoference D",
    id: "4",
  },
};

const subconferenceModule: Module<any, any> = {
  namespaced: true,
  state: {
    conferences: SUBCONFERENCES,
    current: SUBCONFERENCES["1"],
  },
  mutations: {},
  actions: {},
  getters: {
    getById: (state) => (id: string) => state.conferences[id],
    getAsList: (state) => Object.values(state.conferences),
  },
};

export default subconferenceModule;
