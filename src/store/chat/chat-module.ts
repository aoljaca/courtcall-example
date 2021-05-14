import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { Module } from "vuex";

const chats: {
  [key: string]: Chat;
} = {
  a: {
    uuid: "a",
    participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    messages: [
      {
        message: "This is test message 1a",
        timetoken: "",
        uuid: "c1",
        message_type: null,
      },
      {
        message: "This is test message 2a",
        timetoken: "",
        uuid: "c2",
        message_type: null,
      },
    ],
    type: "room",
    newMessages: true,
  },
  b: {
    uuid: "b",
    participants: [1, 2, 3, 4, 5],
    messages: [
      {
        message: "This is test message 1b",
        timetoken: "",
        uuid: "c5",
        message_type: null,
      },
      {
        message: "This is test message 2b",
        timetoken: "",
        uuid: "c3",
        message_type: null,
      },
      {
        message: "This is message 2c",
        timetoken: "",
        uuid: "c3",
        message_type: null,
      },
      {
        message: "This is message 2d",
        timetoken: "",
        uuid: "c4",
        message_type: null,
      },
      {
        message: "This is message 2e",
        timetoken: "",
        message: "c1",
      },
    ],
    type: "regular",
    newMessages: true,
  },
  c: {
    uuid: "c",
    participants: [1, 3, 4],
    messages: [
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
    type: "moderators",
    newMessages: false,
  },
  d: {
    uuid: "d",
    participants: [1, 5, 6, 7],
    messages: [
      {
        message: "This is test message 1d",
        timetoken: "",
        uuid: "c7",
        message_type: null,
      },
    ],
    type: "regular",
    newMessages: false,
  },
  e: {
    uuid: "e",
    participants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    messages: [],
    type: "regular",
    newMessages: true,
  },
};
const chatModule: Module<any, any> = {
  namespaced: true,
  state: {
    chats: chats,
    selectedChatId: "e",
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
  },
};

export default chatModule;
