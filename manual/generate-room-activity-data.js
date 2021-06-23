import { DateTime } from "luxon";

const map = {};
const ROOM_IDS = [];

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
  return {
    startTime: times.start,
    endTime: times.end,
    cases,
    participants,
    isTranscribed,
    isRecorded,
    room: roomId,
  };
};

ROOM_IDS.forEach((r) => {
  const sessions = [];
  for (let i = 0; i < 50; i++) {
    sessions.push(generateRoomSession(r));
  }
  map[r] = sessions;
});

console.log(map);
