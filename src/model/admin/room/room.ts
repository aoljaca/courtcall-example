import { RoomBase } from "./room-base";

export interface Room extends RoomBase {
  templateId: string | null;
  modified: boolean | null;
}
