import { Participant } from "../participant";

export interface FileShareFormatParms {
  ownerId: string;
  participantIds: string[];
  participants: { [key: string]: Participant };
}
