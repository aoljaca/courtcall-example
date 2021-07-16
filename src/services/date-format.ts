import { DateTime } from "luxon";

class DateFormatService {
  formatFullDateTime(utcString: string): string {
    return DateTime.fromISO(utcString)
      .setZone("local")
      .toLocaleString(DateTime.DATETIME_FULL);
  }
}

export default new DateFormatService();
