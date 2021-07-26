import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import router from "@/router";
import { Module } from "vuex";
import { DateTime } from "luxon";
import { SupportItem } from "@/model/admin/support/support-item";
import { VideoState, AudioState } from "./conference-setup-module";

const mockConferences: { [key: string]: SubConference } = {
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

const SUPPORT_QUEUE: SupportItem[] = [
  {
    type: "duplicateJoin",
    participant: "1",
    note: null,
    archived: false,
    room: "R1",
    requestDetails: null,
    openedAt: DateTime.now().toISO(),
    inProgress: false,
    closedAt: null,
    supportedBy: null,
  },
  {
    type: "duplicateJoin",
    participant: "2",
    note: null,
    archived: false,
    room: "R1",
    requestDetails: null,
    openedAt: DateTime.now().minus({ minutes: 30 }).toISO(),
    inProgress: true,
    closedAt: null,
    supportedBy: null,
  },
  {
    type: "user",
    participant: "3",
    note: null,
    archived: false,
    room: "R1",
    requestDetails: "Can't screenshare",
    openedAt: DateTime.now().minus({ hours: 1 }).toISO(),
    inProgress: false,
    closedAt: null,
    supportedBy: null,
  },
  {
    type: "duplicateJoin",
    participant: "4",
    note: null,
    archived: false,
    room: "R1",
    requestDetails: null,
    openedAt: DateTime.now().minus({ hours: 2 }).toISO(),
    inProgress: false,
    closedAt: null,
    supportedBy: null,
  },
  {
    type: "duplicateJoin",
    participant: "5",
    note: null,
    archived: false,
    requestDetails: null,
    openedAt: DateTime.now().minus({ hours: 3 }).toISO(),
    room: "R1",
    inProgress: true,
    closedAt: null,
    supportedBy: null,
  },
  {
    type: "user",
    participant: "6",
    note: null,
    requestDetails: `Can't see video`,
    openedAt: DateTime.now().minus({ hours: 3 }).minus({ minutes: 30 }).toISO(),
    room: "R1",
    archived: false,
    inProgress: false,
    closedAt: null,
    supportedBy: null,
  },
  {
    type: "duplicateJoin",
    participant: "7",
    note: "User was let in",
    requestDetails: null,
    openedAt: DateTime.now().minus({ minutes: 30 }).toISO(),
    room: "R1",
    archived: true,
    inProgress: false,
    closedAt: DateTime.now().minus({ minutes: 15 }).toISO(),
    supportedBy: "1",
  },
  {
    type: "user",
    participant: "8",
    note: null,
    openedAt: DateTime.now().minus({ hours: 1 }).toISO(),
    room: "R1",
    archived: true,
    inProgress: false,
    requestDetails: `Can't hear anyone`,
    closedAt: DateTime.now().minus({ minutes: 30 }).toISO(),
    supportedBy: "2",
  },
  {
    type: "duplicateJoin",
    participant: "9",
    note: null,
    openedAt: DateTime.now().minus({ hours: 2 }).toISO(),
    room: "R1",
    archived: true,
    inProgress: false,
    requestDetails: null,
    closedAt: DateTime.now().minus({ minutes: 45 }).toISO(),
    supportedBy: "1",
  },
  {
    type: "user",
    participant: "10",
    openedAt: DateTime.now().minus({ hours: 3 }).toISO(),
    archived: true,
    inProgress: false,
    requestDetails: `Can't move subconferences`,
    note: `Couldn't fix, need to contact dev team`,
    room: "R1",
    closedAt: DateTime.now().minus({ minutes: 45 }).toISO(),
    supportedBy: "1",
  },
];

const conferenceModule: Module<any, any> = {
  namespaced: true,
  state: {
    // TBD
    activeConferenceId: null,
    activeSubConferenceId: null,
    activeParticipant: {},
    subConferences: mockConferences,
    queue: SUPPORT_QUEUE,
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

    getArchived: (state) => {
      const items = state.queue as SupportItem[];
      return items.filter((i) => i.archived);
    },
    getActive: (state) => {
      const items = state.queue as SupportItem[];
      return items.filter((i) => !i.archived);
    },
    getActiveIssuesForRoom: (state) => (participantIds: string[]) => {
      return state.queue.filter((item: { participant: any; archived: any }) =>
        participantIds.includes(item.participant && !item.archived)
      );
    },
    getActiveIssuesByRoomId: (state) => (roomId: string) => {
      const items = state.queue as SupportItem[];
      return items.filter((i) => !i.archived && i.room === roomId);
    },
    getActiveIssueByParticpant: (state) => (participant: string) => {
      const items = state.queue as SupportItem[];
      return items.filter((i) => !i.archived && i.participant === participant);
    },
  },
};

export default conferenceModule;
