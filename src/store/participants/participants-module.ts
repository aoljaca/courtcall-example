import { EntryAudioBehavor, EntryConference, EntryVideoBehavor } from "@/model/admin/participants/enums";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import roomParticipants from "@/plugins/i18n/en-us/admin/room/room-participants";
import { Module } from "vuex";

const participants: {
  [key: string]: Participant;
} = {
  "1": {
    id: "1",
    name: "George Washington (1)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c1",
    subconferenceId: "4sc",
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
    active: true,
    permissionRoles: ["r1", "r2", "r3"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: true,
    organizations: ["o1", "o2", "o3"],
    email: "fake@gmail.com",
    roomId: "R1",
    phone: '203-575-1020',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "2": {
    id: "2",
    name: "John Adams (2)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c2",
    subconferenceId: "4sc",
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
    active: true,
    permissionRoles: ["r1"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: true,
    organizations: ["o1", "o2"],
    email: "fake@outlook.com",
    roomId: "R1",
    phone: '555-535-1220',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "3": {
    id: "3",
    name: "Thomas Jefferson (3)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c3",
    subconferenceId: "4sc",
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
    active: true,
    permissionRoles: ["r2"],
    role: '',
    systemUser: true,
    organizations: ["o4"],
    email: "fake@fake.com",
    roomId: "R1",
    phone: '363-935-1020',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "4": {
    id: "4",
    name: "James Madison (4)",
    entryConference: EntryConference.MAIN,
    pubnubId: "c4",
    subconferenceId: "3sc",
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
    active: true,
    permissionRoles: ["r3"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: false,
    organizations: ["o5"],
    email: null,
    roomId: "R1",
    phone: '773-545-0010',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "5": {
    id: "5",
    name: "James Monroe (5)",
    entryConference: EntryConference.SUBCONFERENCE,
    pubnubId: "c5",
    subconferenceId: "3sc",
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
    active: true,
    permissionRoles: ["r4"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: true,
    organizations: [],
    email: "fake@courtcall.com",
    roomId: "R1",
    phone: '253-535-0020',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "6": {
    id: "6",
    name: "John Q Adams (6)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c6",
    subconferenceId: "3sc",
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
    active: true,
    permissionRoles: ["r5"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: true,
    organizations: ["o7"],
    email: "email@gmail.com",
    roomId: "R2",
    phone: '893-115-0330',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "7": {
    id: "7",
    name: "Andrew Jackson (7)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c7",
    subconferenceId: "3sc",
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
    active: false,
    permissionRoles: ["r3", "r4"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: true,
    organizations: ["o8", "o9", "o10"],
    email: "email@outlook.com",
    roomId: "R2",
    phone: '633-212-0020',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "8": {
    id: "8",
    name: "Martin Van Buren (8)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c8",
    subconferenceId: "2sc",
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
    active: true,
    permissionRoles: ["r3"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: false,
    organizations: [],
    email: null,
    roomId: "R2",
    phone: '616-414-4444',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "9": {
    id: "9",
    name: "William H Harrison (9)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c9",
    subconferenceId: "2sc",
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
    active: true,
    permissionRoles: ["r3"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: false,
    organizations: [],
    email: null,
    roomId: "R2",
    phone: '103-104-1005',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
  },
  "10": {
    id: "10",
    name: "John Tyler (10)",
    entryConference: EntryConference.WAITING_ROOM,
    pubnubId: "c10",
    subconferenceId: "2sc",
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
    active: false,
    permissionRoles: ["r3"],
    role: 'Scheduled Participant (Dedicated)',
    systemUser: false,
    organizations: [],
    email: null,
    roomId: "R2",
    phone: '353-253-5131',
    expiration: null,
    entryAudioBehavior: EntryAudioBehavor.USER_OPTION_ON,
    entryVideoBehavior: EntryVideoBehavor.USER_OPTION_ON,
    accessLink: "https://app.courtcall.com/1234567890",
    accessCode: "12345asdfg",
    sipURL: "https://sip.courtcall.com/abcdefg",
    pstnPIN: 1234,
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
    participants: {},
    pubNubIdtoParticipantId: {},
    me: null,
  },
  mutations: {
    setParticipants(state, payload: { [key: string]: Participant }) {
      state.participants = payload;
      state.pubNubIdtoParticipantId = {};

      Object.values(payload).forEach((p) => {
        if (p.pubnubId) {
          state.pubNubIdtoParticipantId[p.pubnubId] = p.id;
        }
      });
    },
    setMyParticipant(state, payload: Participant) {
      state.me = payload;
    },
    addParticipant(state, payload: Participant) {
      state.participants[payload.id] = payload;
      state.pubNubIdtoParticipantId[payload.pubnubId] = payload.id;
    },
    removeParticipant(state, payload: Participant) {
      state.participants[payload.id] = undefined;
      state.pubNubIdtoParticipantId[payload.pubnubId] = undefined;
    },
    updateParticipant(state, payload: Participant) {
      state.participants[payload.id] = payload;
    },
  },
  actions: {
    addParticipant(mutations, payload: Participant) {
      // TODO: Make call to API passing in payload

      // Save response to state
      mutations.commit('addParticipant', payload);
    },
    updateParticipant(mutations, payload: Participant) {
      // TODO: Make call to API passing in payload

      // Save response to state
      mutations.commit('updateParticipant', payload);
    },
  },
  getters: {
    getById: (state) => (id: string) => {
      return state.participants[id];
    },
    getAsList: (state) => Object.values(state.participants),
    getSystemUsersAsList: (state) => {
      const participants = Object.values(state.participants) as Participant[];
      return participants.filter((p) => p.systemUser);
    },
    getAsListNoSelf: (state) =>
      (Object.values(state.participants) as Participant[]).filter(
        (p) => p.id !== state.me?.id
      ),
    getByPubNubId: (state) => (pubnubId: string) => {
      return state.participants[state.pubNubIdtoParticipantId[pubnubId]];
    },
    getParticipantsByRoomId: (state) => (roomId: string) => {
      const participants = Object.values(state.participants) as Participant[];
      const roomParticipants = participants.filter((p: Participant) => p.roomId === roomId);
      return roomParticipants;
    }
  },
  actions: {
    alterParticipants({ commit }, payload) {
      commit("setParticipants", payload);
    },
    alterMyParticipant({ commit }, payload) {
      commit("setMyParticipant", payload);
    },
  },
};

export default participantsModule;
