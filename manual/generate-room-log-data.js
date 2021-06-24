import { DateTime } from "luxon";
const map = {};
const roomIds = [];
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
for (let i = 1; i <= 20; i++) {
  roomIds.push(`R${i}`);
}

const generateActvityLog = (roomId) => {
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
    roomId,
    timeStamp,
  };
};

roomIds.forEach((r) => {
  const logs = [];
  for (let i = 0; i < 100; i++) {
    logs.push(generateActvityLog(r));
  }
  map[r] = logs;
});

console.log(map);
