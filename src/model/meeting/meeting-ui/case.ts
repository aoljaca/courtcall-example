export interface Case {
  name: string;
  number: string;
  startTime: string;
  participants: string[];
  id: string;
  live: boolean;
  roomId: string | null;
}
