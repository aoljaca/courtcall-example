import { injectable } from "inversify-props";
import { DateTime } from "luxon";

export interface DateFormatService {
  formatFullDateTime: (utcString: string) => string;
}

@injectable()
export class DateFormatServiceImpl implements DateFormatService {
  formatFullDateTime(utcString: string): string {
    return DateTime.fromISO(utcString)
      .setZone("local")
      .toLocaleString(DateTime.DATETIME_FULL);
  }
}
