import { SupportItem } from "@/model/admin/support/support-item";
import { DateTime } from "luxon";
import { Module } from "vuex";
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

const supportModule: Module<any, any> = {
  namespaced: true,
  state: {
    queue: SUPPORT_QUEUE,
  },
  getters: {
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
  },
};
export default supportModule;
