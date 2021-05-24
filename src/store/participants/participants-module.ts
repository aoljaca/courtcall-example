import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { truncatedNormal } from "@tensorflow/tfjs-core";
import { Module } from "vuex";

const participants: {
  [key: string]: Participant;
} = {
  "1": {
    id: "1",
    name: "P1",
    pubnubId: "c1",
    subconferenceId: "4",
    caseId: null,
    videoStatus: "hard_muted",
    audioStatus: "hard_muted",
    isHost: true,
    chatEnabled: true,
    fileShareEnabled: true,
    collaborationEnabled: true,
    screensharing: true,
    screenshareEnabled: true,
    signatureEnabled: true,
  },
  "2": {
    id: "2",
    name: "P2",
    pubnubId: "c2",
    subconferenceId: "4",
    caseId: "1c",
    audioStatus: "unmuted",
    videoStatus: "muted",
    isHost: false,
    chatEnabled: true,
    fileShareEnabled: false,
    collaborationEnabled: true,
    screensharing: false,
    screenshareEnabled: false,
    signatureEnabled: false,
  },
  "3": {
    id: "3",
    name: "P3",
    pubnubId: "c3",
    subconferenceId: "4",
    caseId: null,
    audioStatus: "unmuted",
    videoStatus: "unmuted",
    isHost: true,
    chatEnabled: true,
    fileShareEnabled: false,
    screensharing: false,
    collaborationEnabled: true,
    screenshareEnabled: true,
    signatureEnabled: true,
  },
  "4": {
    id: "4",
    name: "P4",
    pubnubId: "c4",
    subconferenceId: "3",
    caseId: "2c",
    audioStatus: "muted",
    videoStatus: "muted",
    isHost: false,
    chatEnabled: false,
    fileShareEnabled: true,
    screensharing: false,
    collaborationEnabled: false,
    screenshareEnabled: false,
    signatureEnabled: false,
  },
  "5": {
    id: "5",
    name: "P5",
    pubnubId: "c5",
    subconferenceId: "3",
    caseId: null,
    audioStatus: "unmuted",
    videoStatus: "unmuted",
    isHost: false,
    chatEnabled: true,
    fileShareEnabled: false,
    screensharing: false,
    collaborationEnabled: false,
    screenshareEnabled: true,
    signatureEnabled: true,
  },
  "6": {
    id: "6",
    name: "P6",
    pubnubId: "c6",
    subconferenceId: "3",
    caseId: "3c",
    audioStatus: "muted",
    videoStatus: "muted",
    isHost: true,
    chatEnabled: false,
    fileShareEnabled: false,
    screensharing: false,
    collaborationEnabled: false,
    screenshareEnabled: false,
    signatureEnabled: false,
  },
  "7": {
    id: "7",
    name: "P7",
    pubnubId: "c7",
    subconferenceId: "3",
    caseId: null,
    audioStatus: "hard_muted",
    videoStatus: "unmuted",
    isHost: false,
    chatEnabled: true,
    fileShareEnabled: true,
    screensharing: false,
    collaborationEnabled: true,
    screenshareEnabled: true,
    signatureEnabled: true,
  },
  "8": {
    id: "8",
    name: "P8",
    pubnubId: "c8",
    subconferenceId: "2",
    caseId: "4c",
    audioStatus: "unmuted",
    videoStatus: "unmuted",
    isHost: true,
    chatEnabled: true,
    fileShareEnabled: true,
    collaborationEnabled: true,
    screensharing: false,
    screenshareEnabled: false,
    signatureEnabled: false,
  },
  "9": {
    id: "9",
    name: "P9",
    pubnubId: "c9",
    subconferenceId: "2",
    caseId: null,
    videoStatus: "muted",
    audioStatus: "muted",
    screensharing: false,
    isHost: true,
    chatEnabled: true,
    fileShareEnabled: false,
    collaborationEnabled: true,
    screenshareEnabled: true,
    signatureEnabled: true,
  },
  "10": {
    id: "10",
    name: "P10",
    pubnubId: "c10",
    subconferenceId: "2",
    caseId: "5c",
    videoStatus: "unmuted",
    audioStatus: "muted",
    screensharing: false,
    isHost: true,
    chatEnabled: true,
    fileShareEnabled: true,
    collaborationEnabled: true,
    screenshareEnabled: false,
    signatureEnabled: false,
  },
};
const pubNubIdtoParticipantId: { [key: string]: string } = {};
Object.values(participants).forEach(
  (p) => (pubNubIdtoParticipantId[p.pubnubId] = p.id)
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const participantsModule: Module<any, any> = {
  namespaced: true,
  state: {
    participants: participants,
    pubNubIdtoParticipantId: pubNubIdtoParticipantId,
    me: participants[1],
  },
  mutations: {
    addParticipant(state, payload: Participant) {
      state.participants[payload.id] = payload;
      state.pubNubIdtoParticipantId[payload.pubnubId] = payload.id;
    },
    removeParticipant(state, payload: Participant) {
      state.participants[payload.id] = undefined;
      state.pubNubIdtoParticipantId[payload.pubnubId] = undefined;
    },
  },
  getters: {
    getById: (state) => (id: string) => {
      return state.participants[id];
    },
    getAsList: (state) => Object.values(state.participants),
    getAsListNoSelf: (state) =>
      (Object.values(state.participants) as Participant[]).filter(
        (p) => p.id !== state.me?.id
      ),
    getByPubNubId: (state) => (pubnubId: string) => {
      return state.participants[state.pubNubIdtoParticipantId[pubnubId]];
    },
  },
};

export default participantsModule;
