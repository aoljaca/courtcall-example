import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { Module } from "vuex";

const chats: Chat[] = [

    {
        uuid: 'a',
        participants: [1,2,3,4,5,6,7,8,9,10],
        messages: [
            {
                message: 'This is test message 1a',
                timetoken: '',
                uuid: 'c1',
                message_type: null 

            },
            {
                message: 'This is test message 2a',
                timetoken: '',
                uuid: 'c2',
                message_type: null
            }
        ]
    },
    {
        uuid: 'b',
        participants: [1,2,3,4,5],
        messages: [
            {
                message: 'This is test message 1b',
                timetoken: '',
                uuid: 'c5',
                message_type: null
            },
            {
                message: 'This is test message 2b',
                timetoken: '',
                uuid: 'c3',
                message_type: null 
            },
            {
                message: 'This is message 2c',
                timetoken: '',
                uuid: 'c3',
                message_type: null,
            }
        ],
    },
    {
        uuid: 'c',
        participants: [1,3,4],
        messages: [
            {
                message: 'This is test message 1c',
                timetoken: '',
                uuid: 'c4',
                message_type: null 
            },
            {
                message: 'This is test message 2c',
                timetoken: '',
                uuid: 'c3',
                message_type: null,
            }
        ]
    },
    {
        uuid: 'd',
        participants: [1,5,6,7],
        messages: [
            {
                message: 'This is test message 1d',
                timetoken: '',
                uuid: 'c7',
                message_type: null
            }
        ]
    }

    
];
const chatModule: Module<any, any> = {
  namespaced: true,
  state: {
    chats: chats,
    selectedChatId: null,
  },
  mutations: {
    changeSelectedChatId(state: any, payload) {
      state.selectedChatId = payload;
    },
    addChat(state: any, payload) {
      state.chats = [...state.chats, payload];
    },
    removeChat(state: any, payload) {
      state.chats = (state.chats as any[]).filter((c) => c.uuid !== payload);
    },
  },
  getters: {
    selectedChat: (state) =>
      (state.chats as any[]).find((c) => c.id === state.selectedChatId),
  },
};

export default chatModule;
