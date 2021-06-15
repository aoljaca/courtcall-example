interface RoomDetails {
  name: string | null;
  organization: string | null;
  status: string | null;
  phone: string | null;
  hostAccessCode: number | null;
  participantAccessCode: number | null;
}

const NULL_ROOM_DETAILS: RoomDetails = {
  name: null,
  organization: null,
  status: null,
  phone: null,
  hostAccessCode: null,
  participantAccessCode: null,
};

export { RoomDetails, NULL_ROOM_DETAILS };
