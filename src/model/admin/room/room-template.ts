import { RoomBase } from "./room-base";

export interface RoomTemplate extends RoomBase {
  organizationId: string | null;
}