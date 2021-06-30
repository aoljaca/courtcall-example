export enum EntryConference {
  MAIN = "Main",
  SUBCONFERENCE = "Sub-conference",
  WAITING_ROOM = "Waiting Room",
}

export enum ParticipantRole {
  HOST_DEDICATED = "Host (Dedicated)",
  HOST_SHARED = "Host (Shared)",
  PARTICIPANT_DEDICATED = "Participant (Dedicated)",
  PARTICIPANT_SHARED = "Participant (Shared)",
  PARTICIPANT_SCHEDULED = "Scheduled Participant (Dedicated)",
  INTERPRETER_DEDICATED = "Interpreter (Dedicated)",
  INTERPRETER_SHARED = "Interpreter (Shared)",
}

export enum ParticipantType {
  DEDICATED = "Dedicated",
  SHARED = "Shared",
}

export enum EntryAudioBehavor {
  USER_OPTION_ON = "User Option On",
  USER_OPTION_OFF = "User Option Off",
  DEAF = "Deaf (No Audio)",
}

export enum EntryVideoBehavor {
  USER_OPTION_ON = "User Option On",
  USER_OPTION_OFF = "User Option Off",
  BLIND = "Blind (No Video)",
}

export enum Expiration {
  NONE = "None",
  ONE_DAY = "1 Day",
  THREE_DAYS = "3 Days",
  ONE_WEEK = "1 Week",
  END_OF_CASE = "On Case Expiration",
}

export enum AccessLinkOptions {
  EMBED_ACCESS_CODE = "Embed Access Code",
  REQUIRE_ACCESS_CODE = "Require Access Code",
}
