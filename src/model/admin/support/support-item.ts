import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";

export type SupportType = "user" | "duplicateJoin" | "inProgress";

export interface SupportItem {
  type: SupportType;
  participant: string;
  note: string | null;
  archived: boolean;
  room: string;
  requestDetails: string | null;
}
