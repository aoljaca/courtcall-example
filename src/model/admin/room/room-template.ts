import { RoomBase } from "./room-base";

export interface Room extends RoomBase {
  organizationId: string | null;
}