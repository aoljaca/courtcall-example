import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Module } from "vuex";
const SUBCONFERENCES: { [key: string]: SubConference } = {
  "1sc": {
    sessionId: "1",
    systemName: "A",
    displayName: "Main Room",
    id: "1sc",
  },
  "2sc": {
    sessionId: "2",
    systemName: "B",
    displayName: "Subconference B",
    id: "2sc",
  },
  "3sc": {
    sessionId: "3",
    systemName: "C",
    displayName: "Subconference C",
    id: "3sc",
  },
  "4sc": {
    sessionId: "4",
    systemName: "D",
    displayName: "Subcoference D",
    id: "4sc",
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
