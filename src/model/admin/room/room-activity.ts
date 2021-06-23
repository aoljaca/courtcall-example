export interface RoomSession {
  startTime: string;
  endTime: string;
  participants: number;
  cases: number;
  isRecorded: boolean;
  isTranscribed: boolean;
  room: string;
}
