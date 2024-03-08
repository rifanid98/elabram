import { AuthPresenter } from "../../../interface/extl/v1/auth/auth.presenter";
import { User } from "../../../core/entity/user.entity";
import { AuthService, Signin, Signup } from "../../port/service/auth.service";
import { autoInjectable, injectable, registry, singleton } from "tsyringe";
import { AuthServiceProvider } from "../../../di/provider";
import { JWT } from "../../port/utils/jwt.utils";
import { Security } from "../../port/utils/security.utils";
import { UserRepository } from "../../port/repository";
import { randomUUID } from "crypto";
import { DateUtil } from "../../port/utils/date.utils";
import { Logger } from "../../port/infrastructure";

@singleton()
@autoInjectable()
@injectable()
@registry(AuthServiceProvider)
export class AuthServiceImpl implements AuthService {
  constructor(
    private presenter: AuthPresenter,
    private userRepository: UserRepository,
    private jwt: JWT,
    private security: Security,
    private date: DateUtil,
    private logger: Logger,
  ) {}

  async signup(user: User): Promise<Signup> {
    try {
      user.created_at = this.date.now();
      user.password = await this.security.hash(user.password);
      user.token = await this.security.hash(randomUUID());

      const current = await this.userRepository.getUserByEmail(user.email);
      if (current.error) {
        return { error: current.error };
      }
      if (current.user) {
        return { error: new Error("user already exists") };
      }

      const result = await this.userRepository.createUser(user);

      return {
        user: this.presenter.showAll(result.user),
      };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async signin(user: User): Promise<Signin> {
    try {
      const result = await this.userRepository.getUserByEmail(user.email);
      if (result.error) {
        return { error: result.error };
      }

      if (!result.user) {
        return { error: new Error("user is not exists") };
      }

      const verified = await this.security.verify(
        user.password,
        result.user.password,
      );
      if (!verified) {
        return { error: new Error("credentials is invalid") };
      }

      await this.userRepository.updateUser(
        result.user.bindObject({
          id: result.user.id,
          token: await this.security.hash(randomUUID()),
          updated_at: this.date.now(),
        }),
      );

      const presentedUser = this.presenter.show(result.user);
      const jwtPayload = this.presenter.json(presentedUser);
      const jwt = this.jwt.sign(jwtPayload);
      if (jwt.error) {
        return { error: jwt.error };
      }

      return {
        jwt: jwt.token,
      };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }
}
