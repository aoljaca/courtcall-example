interface RoomDetails {
  details: string | null;
  name: string | null;
  organization: string | null;
  status: string | null;
  phone: string | null;
  hostAccessCode: number | null;
  participantAccessCode: number | null;
  lastUsed?: string;
}

const NULL_ROOM_DETAILS: RoomDetails = {
  details: null,
  name: null,
  organization: null,
  status: null,
  phone: null,
  hostAccessCode: null,
  participantAccessCode: null,
  lastUsed: undefined,
};

export { RoomDetails, NULL_ROOM_DETAILS };
