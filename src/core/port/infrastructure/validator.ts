interface ValidatorInterface {
  validate<T>(data: T): Promise<ValidatorResponse>;
}

export type ValidatorResponse = {
  error: boolean;
  messages: string[];
};

export class Validator implements ValidatorInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validate<T>(data: T): Promise<ValidatorResponse> {
    return {
      error: false,
      messages: [],
    };
  }
}
