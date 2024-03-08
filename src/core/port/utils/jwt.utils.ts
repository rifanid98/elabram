export type JwtResponse<T> = {
  error?: Error;
  message?: string;
  token?: string;
  decoded?: T;
};

interface JwtInterface {
  sign(payload: any): JwtResponse<string>;

  verify<T>(payload: any): JwtResponse<T>;
}

export class JWT implements JwtInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sign(payload: any): JwtResponse<string> {
    return {};
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verify<T>(payload: any): JwtResponse<T> {
    return {};
  }
}
