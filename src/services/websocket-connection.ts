import store from "../store/index";
import { environment } from "@/environments/environment";
import { WS_TYPES } from "@/model/ws-types";
import { io, Socket } from "socket.io-client";

class WebsocketConnectionService {
  adminConnected = false;
  meetingConnected = false;
  meetingSocket: Socket | undefined;
  connectAdmin(): void {
    console.log("ToDo");
  }

  connectMeeting(): void {
    if (!this.meetingConnected) {
      const socket = this.createSocket(`${environment.baseURL}/meeting`);
      this.meetingSocket = socket;
      this.connectSocket(socket);
      this.meetingConnected = true;
    }
  }

  disconnectAdmin(): void {
    console.log("ToDo");
  }

  disconnectMeeting(): void {
    console.log("ToDo");
  }

  private createSocket(url: string) {
    return io(url, {
      transports: ["websocket"],
    });
  }

  private connectSocket(socket: Socket) {
    socket.on(WS_TYPES.CONNECT, () => console.log("connected"));
    socket.on(WS_TYPES.PARTICIPANTS_UPDATED, (participants) => {
      console.log(WS_TYPES.PARTICIPANTS_UPDATED);
      store.dispatch("ParticipantsModule/alterParticipants", participants);
    });
    socket.on(WS_TYPES.MY_PARTICIPANT_UPDATED, (participant) => {
      console.log(WS_TYPES.MY_PARTICIPANT_UPDATED);
      store.dispatch("ParticipantsModule/alterMyParticipant", participant);
    });
    socket.on(WS_TYPES.CHATS_UPDATED, (chats) => {
      console.log(WS_TYPES.CHATS_UPDATED);
      store.dispatch("ChatModule/alterChats", chats);
    });
    socket.on(WS_TYPES.CASES_UPDATED, (cases) => {
      console.log(WS_TYPES.CASES_UPDATED);
      store.dispatch("CasesModule/alterCases", cases);
    });
    socket.on(WS_TYPES.SHARES_UPDATED, (shares) => {
      console.log(WS_TYPES.SHARES_UPDATED);
      store.dispatch("FileShareModule/alterShares", shares);
    });
    socket.on(WS_TYPES.ROLES_UPDATED, (roles) => {
      console.log(WS_TYPES.ROLES_UPDATED);
      store.dispatch("PermissionsModule/alterRoles", roles);
    });
    socket.on(WS_TYPES.SUBCONFERENCES_UPDATED, (subconferences) => {
      console.log(WS_TYPES.SUBCONFERENCES_UPDATED);
      store.dispatch("SubconferenceModule/alterSubconferences", subconferences);
    });
    socket.on(WS_TYPES.CURRENT_SUBCONFERENCE_UPDATED, (subconference) => {
      console.log(WS_TYPES.CURRENT_SUBCONFERENCE_UPDATED);
      store.dispatch(
        "SubconferenceModule/alterCurrentSubconference",
        subconference
      );
    });
  }
}

export default new WebsocketConnectionService();
