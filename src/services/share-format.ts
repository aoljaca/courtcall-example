import { FileShareFormatParms } from "@/model/meeting/meeting-ui/side-bar/files/file-share-format-parms";
import { injectable } from "inversify-props";

export interface ShareFormatService {
  formatParticipants: (params: FileShareFormatParms) => string;
}

@injectable()
export class ShareFormatServiceImpl implements ShareFormatService {
  formatParticipants(params: FileShareFormatParms): string {
    const nonOwnerParticipants = params.participantIds.filter(
      (id) => id !== params.ownerId
    );
    const participantNames = nonOwnerParticipants.map((id) => {
      const participant = params.participants[id];
      if (!participant) {
        return "Unknown";
      } else {
        return participant.name;
      }
    });
    if (participantNames.length === 0) {
      return "N/A";
    } else if (participantNames.length === 1) {
      return participantNames[0];
    } else if (participantNames.length === 2) {
      return `${participantNames[0]} and ${participantNames[1]}`;
    } else if (participantNames.length <= 4) {
      let returnString = "";
      for (let i = 0; i < participantNames.length - 1; i++) {
        returnString += `${participantNames[i]},`;
      }
      returnString += `and ${participantNames[participantNames.length - 1]}`;
      return returnString;
    } else {
      let returnString = "";
      for (let i = 0; i < 4; i++) {
        returnString += `${participantNames[i]},`;
      }
      returnString += `+ ${participantNames.length - 4} more`;
      return returnString;
    }
  }
}
