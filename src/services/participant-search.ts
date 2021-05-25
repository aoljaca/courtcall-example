import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { injectable } from "inversify-props";

export interface ParticipantSearchParams {
  term: string;
  participant: Participant;
  case: Case | null;
}

export interface ParticipantSearchService {
  search: (params: ParticipantSearchParams) => boolean;
}

@injectable()
export class ParticipantSearchServiceImpl implements ParticipantSearchService {
  search(params: ParticipantSearchParams): boolean {
    if (!params.term) {
      return true;
    }
    const termLowerCase = params.term.toLowerCase();
    if (params.participant.name.toLowerCase().includes(termLowerCase)) {
      return true;
    }
    if (params.case && params.case.name.toLowerCase().includes(termLowerCase)) {
      return true;
    }
    if (
      params.case &&
      params.case.number.toLowerCase().includes(termLowerCase)
    ) {
      return true;
    }
    return false;
  }
}
