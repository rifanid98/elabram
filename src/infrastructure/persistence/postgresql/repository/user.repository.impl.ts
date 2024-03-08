import { Result, UserRepository } from "../../../../core/port/repository";
import { User } from "../../../../core/entity";
import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { UserRepositoryProvider } from "../../../../di/provider/user/user-repository.provider";
import KnexInstance from "../knex/knex";
import { Logger } from "../../../../core/port/infrastructure";
import { ExceptionHandler } from "winston";

@singleton()
@autoInjectable()
@registry(UserRepositoryProvider)
export class UserRepositoryImpl extends UserRepository {
  constructor(
    @inject("Knex") private db: KnexInstance,
    private logger: Logger,
  ) {
    super();
  }

  async createUser(user: User): Promise<Result> {
    try {
      const result = await this.db.knex.insert(user).into(this.table);
      return Promise.resolve({ user: user });
    } catch (e) {
      this.logger.Error(e);
      return Promise.reject();
    }
  }

  async getUserByEmail(email: string): Promise<Result> {
    try {
      const users: User[] = await this.db
        .knex<User>(this.table)
        .select("*")
        .where({ email: email });

      if (users.length < 1) {
        return { message: "user not found" };
      }

      const user = new User(users[0]);

      return { user: user };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async updateUser(user: User): Promise<boolean> {
    try {
      const update = await this.db
        .knex<User>(this.table)
        .where({ id: user.id })
        .update(user);

      if (update < 0) {
        return false;
      }

      return true;
    } catch (e) {
      this.logger.Error(e);
      return false;
    }
  }
}
