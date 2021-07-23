import { Module } from "vuex";
import SESSIONS from "./fake-room-session-data.json";

const roomSessionModule: Module<any, any> = {
  namespaced: true,
  state: {
    sessions: SESSIONS,
  },
  getters: {
    getByRoomId: (state) => (id: string) => {
      return state.sessions[id];
    },
  },
};

export default roomSessionModule;
