import { injectable } from "inversify-props";
import store from "../store/index";
import { environment } from "@/environments/environment";
import { WS_TYPES } from "@/model/ws-types";
import { io, Socket } from "socket.io-client";

export interface WebsocketConnectionService {
  connectMeeting: () => void;
  connectAdmin: () => void;
  disconnectAdmin: () => void;
  disconnectMeeting: () => void;
}

@injectable()
export class WebsocketConnectionServiceImpl
  implements WebsocketConnectionService {
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
  }
}
