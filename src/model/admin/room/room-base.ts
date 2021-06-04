import { RoomSettings } from "./room-settings";
import { RoomDetails } from "./room-details";

export interface RoomBase {
  uuid: string;
  roomDetails: RoomDetails;
  roomSettings: RoomSettings;
}
