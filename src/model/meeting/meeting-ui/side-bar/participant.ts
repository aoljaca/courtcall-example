export type AVStatus = "unmuted" | "muted" | "hard_muted";
/**
 * Fill in as needed
 */
export interface Participant {
  id: string;
  name: string;
  pubnubId: string;
  subconferenceId: null | string;
  caseId: null | string;
  videoStatus: AVStatus;
  audioStatus: AVStatus;
  screensharing: boolean;
  isHost: boolean;
  chatEnabled: boolean;
  fileShareEnabled: boolean;
  collaborationEnabled: boolean;
  signatureEnabled: boolean;
  screenshareEnabled: boolean;
  active: boolean;
}
