import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Module } from "vuex";

const participants: {
  [key: number]: Participant;
} = {
  1: {
    id: 1,
    name: "P1",
    pubnub_id: "c1",
  },
  2: {
    id: 2,
    name: "P2",
    pubnub_id: "c2",
  },
  3: {
    id: 3,
    name: "P3",
    pubnub_id: "c3",
  },
  4: {
    id: 4,
    name: "P4",
    pubnub_id: "c4",
  },
  5: {
    id: 5,
    name: "P5",
    pubnub_id: "c5",
  },
  6: {
    id: 6,
    name: "P6",
    pubnub_id: "c6",
  },
  7: {
    id: 7,
    name: "P7",
    pubnub_id: "c7",
  },
  8: {
    id: 8,
    name: "P8",
    pubnub_id: "c8",
  },
  9: {
    id: 9,
    name: "P9",
    pubnub_id: "c9",
  },
  10: {
    id: 10,
    name: "P10",
    pubnub_id: "c10",
  },
};
const pubNubIdtoParticipantId: { [key: string]: number } = {};
Object.values(participants).forEach(
  (p) => (pubNubIdtoParticipantId[p.pubnub_id] = p.id)
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const participantsModule: Module<any, any> = {
  namespaced: true,
  state: {
    participants: participants,
    pubNubIdtoParticipantId: {},
    me: participants[0],
  },
  mutations: {
    addParticipant(state, payload: Participant) {
      state.participants[payload.id] = payload;
      state.pubNubIdtoParticipantId[payload.pubnub_id] = payload.id;
    },
    removeParticipant(state, payload: Participant) {
      state.participants[payload.id] = undefined;
      state.pubNubIdtoParticipantId[payload.pubnub_id] = undefined;
    },
  },
  getters: {
    getById: (state) => (id: number) => {
      return state.participants[id];
    },
    getAsList: (state) => Object.values(state.participants),
    getAsListNoSelf: (state) =>
      (Object.values(state.participants) as Participant[]).filter(
        (p) => p.id !== state.me?.id
      ),
  },
};

export default participantsModule;
