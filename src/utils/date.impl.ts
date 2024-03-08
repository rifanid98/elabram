import { singleton } from "tsyringe";
import { Logger } from "../core/port/infrastructure";
import { DateUtil } from "../core/port/utils/date.utils";

@singleton()
export class DateUtilImpl implements DateUtil {
  constructor(private logger: Logger) {}

  now(): string {
    let now = new Date().toISOString();
    const split = now.split("T");
    now = split[0] + " " + split[1].split(".")[0];
    return now;
  }
}
