type FileShareSelectType =
  | "subconference"
  | "hostsAndModerators"
  | "selectedCases"
  | "selectedParticipants";

interface FileShareWithSelectType {
  type: FileShareSelectType;
}

const SELECT_TYPES: FileShareWithSelectType[] = [
  {
    type: "hostsAndModerators",
  },
  {
    type: "selectedCases",
  },
  {
    type: "selectedParticipants",
  },
  {
    type: "subconference",
  },
];

export { SELECT_TYPES, FileShareSelectType, FileShareWithSelectType };
