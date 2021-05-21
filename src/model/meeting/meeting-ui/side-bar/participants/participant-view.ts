type ParticipantViewType = "roomOverview" | "activeParticipants" | "cases";

interface ParticipantView {
  type: ParticipantViewType;
  label: string;
}

const ROOM_OVERVIEW_VIEW_TYPE: ParticipantView = {
  type: "roomOverview",
  label: "sidebar.participants.roomOverview",
};

const ACTIVE_PARTICIPANTS_VIEW_TYPE: ParticipantView = {
  type: "activeParticipants",
  label: "sidebar.participants.activeParticipants.title",
};

const CASES_VIEW_TYPE: ParticipantView = {
  type: "cases",
  label: "sidebar.participants.cases",
};

const PARTICIPANT_VIEW_TYPES = [
  ROOM_OVERVIEW_VIEW_TYPE,
  ACTIVE_PARTICIPANTS_VIEW_TYPE,
  CASES_VIEW_TYPE,
];

export {
  ParticipantViewType,
  ParticipantView,
  PARTICIPANT_VIEW_TYPES,
  ROOM_OVERVIEW_VIEW_TYPE,
  ACTIVE_PARTICIPANTS_VIEW_TYPE,
  CASES_VIEW_TYPE,
};
