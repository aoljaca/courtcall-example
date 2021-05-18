type FileShareSelectType =
  | "subconference"
  | "hostsAndModerators"
  | "selectedCases"
  | "selectedParticipants";

interface FileShareWithSelecType {
  type: FileShareSelectType;
}

const SELECT_TYPES: FileShareWithSelecType[] = [
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

export { SELECT_TYPES, FileShareSelectType, FileShareWithSelecType };
