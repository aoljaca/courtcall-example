import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Module } from "vuex";
import { VideoState, AudioState } from "./conference-setup-module";

const conferenceModule: Module<any, any> = {
  namespaced: true,
  state: {
    // TBD
    activeConferenceId: null,
    activeParticipant: {},
    subConferences: {},
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
    },
    leaveConference({ commit }) {
      // Call API then set probably null to state
      commit("setActiveConferenceId", null);
    },
    moveConference({ commit }, newConferenceId) {
      // Call API then set response to state
      commit("setActiveConferenceId", newConferenceId);
    },
  },
  getters: {
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
  },
};

export default conferenceModule;
