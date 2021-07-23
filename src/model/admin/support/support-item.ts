export type SupportType = "user" | "duplicateJoin";

export interface SupportItem {
  type: SupportType;
  participant: string;
  note: string | null;
  archived: boolean;
  room: string;
  requestDetails: string | null;
  openedAt: string;
  inProgress: boolean;
  closedAt: string | null;
  supportedBy: string | null;
}
