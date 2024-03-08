import { User } from "core/entity/user.entity";

export type Result = {
  error?: Error;
  message?: string;
  user?: User;
  users?: User[];
};

interface UserRepositoryInterface {
  getAllUsers(): Promise<Result>;
  getOneUser(user: User): Promise<Result>;
  getUserById(id: string): Promise<Result>;
  getUserByEmail(email: string): Promise<Result>;
  createUser(user: User): Promise<Result>;
  updateUser(user: User): Promise<boolean>;
}

export class UserRepository implements UserRepositoryInterface {
  protected table: string = "user";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUser(user: User): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAllUsers(): Promise<Result> {
    return Promise.resolve({ users: [] });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getOneUser(user: User): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserById(id: string): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserByEmail(email: string): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser(user: User): Promise<boolean> {
    return Promise.resolve(false);
  }
}
