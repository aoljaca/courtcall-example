import { Participant } from "../participant";

export interface ChatFormatParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  this: any;
  myId: number;
  participantIds: number[];
  participants: { [key: number]: Participant };
  type: "regular" | "room" | "moderators";
}
