import { User } from "core/entity/user.entity";

export type Signup = {
  error?: Error;
  user?: User;
};

export type Signin = {
  error?: Error;
  jwt?: string;
};

interface AuthServiceInterface {
  signup(user: User): Promise<Signup>;
  signin(user: User): Promise<Signin>;
}

export class AuthService implements AuthServiceInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signin(auth: User): Promise<Signin> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signup(auth: User): Promise<Signup> {
    return Promise.resolve(undefined);
  }
}
