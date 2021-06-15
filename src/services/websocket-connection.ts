import { injectable } from "inversify-props";
import store from "../store/index";
import { environment } from "@/environments/environment";
import { WS_TYPES } from "@/model/ws-types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import io from "socket.io-client";
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
  meetingSocket: WebSocket | undefined;
  connectAdmin(): void {
    console.log("ToDo");
  }

  connectMeeting(): void {
    if (!this.meetingConnected) {
      const socket = this.createSocket(`${environment.baseURL}`);
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
    return new WebSocket(`ws://${environment.baseURL}/meeting`);
  }

  private connectSocket(socket: WebSocket) {
    socket.onopen = () => console.log("open");
  }
}
