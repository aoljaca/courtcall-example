export enum SearchType {
  SYSTEM_USER = "System Users",
  PARTICIPANT = "Participants",
  ROOM = "Rooms",
  CASE = "Cases",
  ORGANIZATION = "Organizations",
}

export interface LocalizedSearchType {
  name: string;
  type: SearchType;
}
