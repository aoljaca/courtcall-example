import { Case } from "@/model/meeting/meeting-ui/case";

class CaseFormatService {
  formatCase(c: Case): string {
    return `${c.name} - ${c.number}`;
  }
}

export default new CaseFormatService();
