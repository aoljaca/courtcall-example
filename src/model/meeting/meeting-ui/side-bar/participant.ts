import {
  AccessLinkOptions,
  EntryAudioBehavor,
  EntryConference,
  EntryVideoBehavor,
} from "@/model/admin/participants/enums";

export type AVStatus = "unmuted" | "muted" | "hard_muted";
/**
 * Fill in as needed
 */
export interface Participant {
  id: string;
  name: string;
  label?: string;
  entryConference: EntryConference;
  pubnubId: string;
  subconferenceId: null | string;
  caseId: null | string;
  expiration: string | null;
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
  permissionRoles: string[];
  role: string;
  systemUser: boolean;
  organizations: string[];
  email: string | null;
  roomId: string;
  phone: string | null;
  entryAudioBehavior: EntryAudioBehavor;
  entryVideoBehavior: EntryVideoBehavor;
  accessLink: string | null;
  accessLinkOption?: AccessLinkOptions;
  accessCode: string | null;
  sipURL: string | null;
  pstnPIN: number | null;
  archived?: boolean;
}
