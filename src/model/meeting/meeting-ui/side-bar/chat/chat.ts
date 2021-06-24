export type ChatType = "regular" | "room" | "moderators";
export interface Chat {
  uuid: string;
  participants: number[];
  type: ChatType;
  newMessages: boolean;
}
