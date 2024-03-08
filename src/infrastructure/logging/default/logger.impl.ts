import { LogData, Logger } from "../../../core/port/infrastructure";
import { autoInjectable, singleton } from "tsyringe";
import * as winston from "winston";

@singleton()
@autoInjectable()
export class LoggerImpl implements Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL,
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.simple(),
            winston.format.colorize(),
          ),
        }),
      ],
    });
  }

  Info(data: LogData): void {
    this.logger.info(data);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Debug(data: LogData): void {
    this.logger.debug(data);
  }

  Error(data: LogData): void {
    console.error(data);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Warn(data: LogData): void {
    this.logger.warn(data);
  }
}
