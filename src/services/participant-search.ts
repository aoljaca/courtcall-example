import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";

export interface ParticipantSearchParams {
  term: string;
  participant: Participant;
  case: Case | null;
}

class ParticipantSearchService {
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

export default new ParticipantSearchService();
