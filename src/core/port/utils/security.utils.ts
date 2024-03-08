interface SecurityInterface {
  hash(value: string): Promise<string>;
  verify(plain: string, hashed: string): Promise<boolean>;
}

export class Security implements SecurityInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hash(value: string): Promise<string> {
    return Promise.resolve("");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verify(plain: string, hashed: string): Promise<boolean> {
    return Promise.resolve(false);
  }
}
