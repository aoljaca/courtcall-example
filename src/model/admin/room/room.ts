import { RoomSettings } from "./room-settings";
import { RoomDetails } from "./room-details";

export interface Room {
  uuid: string;
  roomDetails: RoomDetails;
  roomSettings: RoomSettings;
}
