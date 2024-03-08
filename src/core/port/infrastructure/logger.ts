export type LogData = {
  error?: Error;
  errors?: Error[];
  message?: string;
  stacktrace?: string;
};

interface LoggerInterface {
  Info(data: LogData);
  Error(data: LogData);
  Warn(data: LogData);
  Debug(data: LogData);
}

export class Logger implements LoggerInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Info(data: LogData) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Error(data: LogData) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Debug(data: LogData) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Warn(data: LogData) {}
}
