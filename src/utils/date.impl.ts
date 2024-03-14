import { singleton } from "tsyringe";
import { Logger } from "../core/port/infrastructure";
import { DateUtil } from "../core/port/utils/date.utils";

@singleton()
export class DateUtilImpl implements DateUtil {
  constructor(private logger: Logger) {}

  now(): string {
    const date = new Date();
    const timezoneOffset = Math.abs(date.getTimezoneOffset() / 60);
    const timezoneOffsetUnix = timezoneOffset * 60 * 60 * 1000;
    const adjustedTime = new Date(date.getTime() + timezoneOffsetUnix);
    let now = adjustedTime.toISOString();
    const split = now.split("T");
    now = split[0] + " " + split[1].split(".")[0];
    return now;
  }
}
