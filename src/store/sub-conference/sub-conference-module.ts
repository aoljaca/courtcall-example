import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Module } from "vuex";
const SUBCONFERENCES: { [key: string]: SubConference } = {
  "1": {
    sessionId: "1",
    systemName: "A",
    displayName: "Main Room",
  },
  "2": {
    sessionId: "2",
    systemName: "B",
    displayName: "Subconference B",
  },
  "3": {
    sessionId: "3",
    systemName: "C",
    displayName: "Subconference C",
  },
  "4": {
    sessionId: "4",
    systemName: "D",
    displayName: "Subcoference D",
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
    getBySessionId: (state) => (id: string) => state.conferences[id],
    getAsList: (state) => Object.values(state.conferences),
  },
};

export default subconferenceModule;
