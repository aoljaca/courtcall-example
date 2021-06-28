export interface RoomSession {
  startTime: string;
  endTime: string;
  participants: number;
  cases: number;
  isRecorded: boolean;
  isTranscribed: boolean;
  room: string;
  activityLogs: RoomActivityLog[];
}

export enum ActivityLogType {
  UserJoin = "USER_JOIN",
  UserLeave = "USER_LEAVE",
  UserMoved = "USER_MOVED",
  RecordingStart = "RECORDING_START",
  RecordingStop = "RECORDING_STOP",
  StreamingStart = "STREAMING_START",
  StreamingStop = "STREAMING_STOP",
  UserSupportRequest = "USER_SUPPORT_REQUEST",
  UserHandRaised = "USER_HAND_RAISED",
}

export interface RoomActivityLog {
  type: ActivityLogType;
  participant: string;
  subconference: string;
  userMode: "host" | "participant";
  timeStamp: string;
}
