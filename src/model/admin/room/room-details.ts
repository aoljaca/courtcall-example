interface RoomDetails {
  details: string | null;
  name: string | null;
  organization: string | null;
  status: string | null;
  phone: string | null;
  hostAccessCode: number | null;
  participantAccessCode: number | null;
}

const NULL_ROOM_DETAILS: RoomDetails = {
  details: null,
  name: null,
  organization: null,
  status: null,
  phone: null,
  hostAccessCode: null,
  participantAccessCode: null,
};

export { RoomDetails, NULL_ROOM_DETAILS };
