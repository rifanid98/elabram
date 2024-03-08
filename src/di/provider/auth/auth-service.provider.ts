import {
  AuthPresenter,
  AuthPresenterImpl,
} from "../../../interface/extl/v1/auth/auth.presenter";
import { JwtImpl } from "../../../utils/jwt.impl";
import { JWT } from "../../../core/port/utils/jwt.utils";
import { Security } from "../../../core/port/utils/security.utils";
import { UserRepository } from "../../../core/port/repository";
import { UserRepositoryImpl } from "../../../infrastructure/persistence/postgresql/repository";
import { ProviderRegistry } from "../../type";
import { SecurityMd5Impl } from "../../../utils/security-md5.impl";
import { DateUtil } from "../../../core/port/utils/date.utils";
import { DateUtilImpl } from "../../../utils/date.impl";

export const AuthServiceProvider: ProviderRegistry[] = [
  {
    token: AuthPresenter,
    useClass: AuthPresenterImpl,
  },
  {
    token: UserRepository,
    useClass: UserRepositoryImpl,
  },
  {
    token: JWT,
    useClass: JwtImpl,
  },
  {
    token: Security,
    useClass: SecurityMd5Impl,
  },
  {
    token: DateUtil,
    useClass: DateUtilImpl,
  },
];
