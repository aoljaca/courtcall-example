import store from "../../store/index";
import { environment } from "@/environments/environment";
import { WS_TYPES } from "@/model/ws-types";
import { io, Socket } from "socket.io-client";
import { SocketEvent, SOCKET_EVENTS } from "./websocket-events";

class WebsocketConnectionService {
  adminConnected = false;
  meetingConnected = false;
  meetingSocket: Socket | undefined;
  socketEvents: SocketEvent[] = SOCKET_EVENTS;

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

    this.socketEvents.forEach((se) => {
      socket.on(se.eventType, (payload) => {
        console.log(`Socket Event Emitted: ${se.eventType}`);
        store.dispatch(se.actionName, payload);
      });
    });
  }
}

export default new WebsocketConnectionService();
