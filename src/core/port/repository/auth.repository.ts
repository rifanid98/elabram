import { User } from "../../entity/user.entity";

interface AuthRepositoryInterface {
  signup(user: User): Promise<User>;
  signin(user: User): Promise<User>;
}

export class AuthRepository implements AuthRepositoryInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signin(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signup(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }
}
