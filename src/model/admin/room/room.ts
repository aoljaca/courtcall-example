import { RoomBase } from "./room-base";

export interface Room extends RoomBase {
  active: boolean | null;
  templateId: string | null;
  modified: boolean | null;
}
