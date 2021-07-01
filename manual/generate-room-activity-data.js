import { DateTime } from "luxon";

const map = {};
const ROOM_IDS = [];
const subconferenceIds = ["1sc", "2sc", "3sc", "4sc"];
const participantIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const activity_types = [
  "USER_JOIN",
  "USER_LEAVE",
  "USER_MOVED",
  "RECORDING_START",
  "RECORDING_STOP",
  "STREAMING_START",
  "STREAMING_STOP",
  "USER_SUPPORT_REQUEST",
  "USER_HAND_RAISED",
];

const generateActvityLog = () => {
  const type =
    activity_types[Math.floor(Math.random() * activity_types.length)];
  const participant =
    participantIds[Math.floor(Math.random() * participantIds.length)];
  const subconference =
    subconferenceIds[Math.floor(Math.random() * subconferenceIds.length)];
  const userMode = Math.random() > 0.8 ? "host" : "participant";
  const timeStamp = DateTime.now()
    .toUTC()
    .minus({
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
    })
    .toISO();
  return {
    type,
    participant,
    subconference,
    userMode,
    timeStamp,
  };
};
for (let i = 1; i <= 20; i++) {
  ROOM_IDS.push(`R${i}`);
}

const generateTimes = () => {
  const offset = Math.floor(1 + Math.random() * 10);
  const minutesOffsetStart = Math.floor(1 + Math.random() * 30);
  const minutesOffset = Math.floor(1 + Math.random() * 100);
  const startTime = DateTime.now().minus({
    days: offset,
    minutes: minutesOffsetStart,
  });
  const endTime = startTime.plus({ minutes: minutesOffset });

  return {
    start: startTime.toUTC().toISO(),
    end: endTime.toUTC().toISO(),
  };
};

const generateRoomSession = (roomId) => {
  const times = generateTimes();
  const participants = Math.floor(Math.random() * 50);
  const cases = Math.floor(Math.random() * 10);
  const isTranscribed = Math.random() > 0.5 ? true : false;
  const isRecorded = Math.random() > 0.5 ? true : false;
  const activityLogs = [];
  for (let i = 0; i < 100; i++) {
    activityLogs.push(generateActvityLog());
  }
  return {
    startTime: times.start,
    endTime: times.end,
    cases,
    participants,
    isTranscribed,
    isRecorded,
    room: roomId,
    activityLogs,
  };
};

ROOM_IDS.forEach((r) => {
  const sessions = [];
  for (let i = 0; i < 50; i++) {
    sessions.push(generateRoomSession(r));
  }
  map[r] = sessions;
});

console.log(JSON.stringify(map));
