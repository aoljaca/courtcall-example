import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import router from "@/router";
import { Module } from "vuex";
import { VideoState, AudioState } from "./conference-setup-module";

const mockConferences: { [key: string]: SubConference } = {
  mc: {
    id: "mc",
    sessionId: "fakeSessionId`",
    systemName: "systemName1",
    displayName: "Main Conference",
  },
  sc1: {
    id: "sc1",
    sessionId: "fakeSessionId`",
    systemName: "systemName1",
    displayName: "Sub-conference 1",
  },
  sc2: {
    id: "sc2",
    sessionId: "fakeSessionId`",
    systemName: "systemName2",
    displayName: "Sub-conference 2",
  },
  sc3: {
    id: "sc3",
    sessionId: "fakeSessionId`",
    systemName: "systemName3",
    displayName: "Sub-conference 3",
  },
  sc4: {
    id: "sc4",
    sessionId: "fakeSessionId`",
    systemName: "systemName4",
    displayName: "Sub-conference 4",
  },
  sc5: {
    id: "sc5",
    sessionId: "fakeSessionId`",
    systemName: "systemName5",
    displayName: "Sub-conference 5",
  },
};

const conferenceModule: Module<any, any> = {
  namespaced: true,
  state: {
    // TBD
    activeConferenceId: null,
    activeSubConferenceId: null,
    activeParticipant: {},
    subConferences: mockConferences,
  },
  mutations: {
    setActiveConferenceId(state, newConferenceId: string) {
      state.activeConferenceId = newConferenceId;
    },
    setSubConferenceIds(
      state,
      newSubConferences: { [key: string]: SubConference }
    ) {
      state.subConferences = newSubConferences;
    },
  },
  actions: {
    joinConference({ commit }, conferenceId: string) {
      // Call API then set response to state
      commit("setActiveConferenceId", conferenceId);
      router.push({
        name: "Conference Call",
        params: {
          conferenceId: conferenceId,
        },
      });
    },
    leaveConference({ commit }) {
      // Call API then set probably null to state
      commit("setActiveConferenceId", null);
      router.push({
        name: "Leave Call",
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    moveToConference({ commit }, newConferenceId) {
      // Call API then set response to state
      router.push({
        name: "Waiting Room",
        params: {
          conferenceId: newConferenceId,
        },
      });
    },
  },
  getters: {
    getActiveConference: (state) =>
      state.subConferences[state.activeConferenceId],
    getActiveSubConference: (state) =>
      state.subConferences[state.activeSubConferenceId],
    getSubConferenceByid: (state) => (subConferenceId: string) =>
      state.subConferences[subConferenceId],
    getSubConferencesAsList: (state) => Object.values(state.subConferences),
    videoState: (state, getters, rootState) => {
      let result = VideoState.Disabled;

      if (getters.canEnableVideo) {
        result = rootState.ConferenceSetupModule.videoState;
      }

      return result;
    },
    audioState: (state, getters, rootState) => {
      let result = AudioState.Muted;

      if (getters.canEnableAudio) {
        result = rootState.ConferenceSetupModule.audioState;
      }

      return result;
    },
    // TODO: Check for video devices && check participant settings
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canEnableVideo: (state) => true,

    // TODO: Check for audio devices && check participant settings
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canEnableAudio: (state) => true,
    // TODO: Check if participant is host or system user that has privileges
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    canMoveConferences: (state) => true,
  },
};

export default conferenceModule;
