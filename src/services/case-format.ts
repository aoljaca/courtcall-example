import { Case } from "@/model/meeting/meeting-ui/case";
import { injectable } from "inversify-props";

export interface CaseFormatService {
  formatCase: (c: Case) => string;
}

@injectable()
export class CaseFormatServiceImpl implements CaseFormatService {
  formatCase(c: Case): string {
    return `${c.name} - ${c.number}`;
  }
}
