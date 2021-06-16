import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { Module } from "vuex";
import { DateTime } from "luxon";
import { ChatMessage } from "@/model/meeting/meeting-ui/side-bar/chat/chat-message";
const MS_NANOSEC_CONVERSION = 10000;
const messages: { [key: string]: ChatMessage[] } = {
  a: [
    {
      message: "This is test message 1a",
      timetoken: `${DateTime.now().minus({ weeks: 1 }).toMillis() * 10000}`,
      uuid: "c1",
      message_type: null,
    },
    {
      message: "This is test message 2a",
      timetoken: `${DateTime.now().minus({ days: 4 }).toMillis() * 10000}`,
      uuid: "c2",
      message_type: null,
    },
  ],
  b: [
    {
      message: "This is test message 1b",
      timetoken: `${
        DateTime.now().minus({ weeks: 1 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c5",
      message_type: null,
    },
    {
      message: "This is test message 2b",
      timetoken: `${
        DateTime.now().minus({ days: 2 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c3",
      message_type: null,
    },
    {
      message: "This is message 2c",
      timetoken: `${
        DateTime.now().minus({ days: 1 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c3",
      message_type: null,
    },
    {
      message: "This is message 2d",
      timetoken: `${
        DateTime.now().minus({ hours: 6 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c4",
      message_type: null,
    },
    {
      message: "This is message 2e",
      timetoken: `${
        DateTime.now().minus({ hours: 3 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c1",
      message_type: null,
    },
    {
      message: "This is message 2f",
      timetoken: `${
        DateTime.now().minus({ minutes: 90 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c5",
      message_type: null,
    },
    {
      message: "This is message 2g",
      timetoken: `${
        DateTime.now().minus({ minutes: 45 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c3",
      message_type: null,
    },
    {
      message: "This is message 2h",
      timetoken: `${
        DateTime.now().minus({ minutes: 20 }).toMillis() * MS_NANOSEC_CONVERSION
      }`,
      uuid: "c4",
      message_type: null,
    },
  ],
  c: [
    {
      message: "This is test message 1c",
      timetoken: "",
      uuid: "c4",
      message_type: null,
    },
    {
      message: "This is test message 2c",
      timetoken: "",
      uuid: "c3",
      message_type: null,
    },
  ],
  d: [
    {
      message: "This is test message 1d",
      timetoken: "",
      uuid: "c7",
      message_type: null,
    },
  ],
  e: [],
};
const chats: {
  [key: string]: Chat;
} = {
  a: {
    uuid: "a",
    participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    type: "room",
    newMessages: true,
  },
  b: {
    uuid: "b",
    participants: [1, 2, 3, 4, 5],
    type: "regular",
    newMessages: true,
  },
  c: {
    uuid: "c",
    participants: [1, 3, 4],
    type: "moderators",
    newMessages: false,
  },
  d: {
    uuid: "d",
    participants: [1, 5, 6, 7],
    type: "regular",
    newMessages: false,
  },
  e: {
    uuid: "e",
    participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    type: "regular",
    newMessages: true,
  },
};
const chatModule: Module<any, any> = {
  namespaced: true,
  state: {
    chats: chats,
    selectedChatId: "b",
    messages: messages,
  },
  mutations: {
    changeSelectedChatId(state: any, payload) {
      state.selectedChatId = payload;
    },
    addChat(state: any, payload) {
      state.chats[payload.uuid] = payload;
    },
    removeChat(state: any, payload) {
      state.chats[payload] = undefined;
    },
  },
  actions: {
    alterSelectedChatId({ commit }, payload) {
      commit("changeSelectedChatId", payload.id);
    },
  },
  getters: {
    selectedChat: (state) => state.chats[state.selectedChatId],
    chatsAsList: (state) => Object.values(state.chats),
    messagesForChat: (state) => (id: any) => state.messages[id],
  },
};

export default chatModule;
