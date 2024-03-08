import { JwtImpl } from "../../../utils/jwt.impl";
import { JWT } from "../../../core/port/utils/jwt.utils";
import { Security } from "../../../core/port/utils/security.utils";
import { ProviderRegistry } from "../../type";
import { SecurityMd5Impl } from "../../../utils/security-md5.impl";
import { DateUtil } from "../../../core/port/utils/date.utils";
import { DateUtilImpl } from "../../../utils/date.impl";
import {
  CompanyPresenter,
  CompanyPresenterImpl,
} from "../../../interface/extl/v1/company/company.presenter";
import { CompanyRepository } from "../../../core/port/repository/company.repository";
import { CompanyRepositoryImpl } from "../../../infrastructure/persistence/postgresql/repository/company.repository.impl";

export const CompanyServiceProvider: ProviderRegistry[] = [
  {
    token: CompanyPresenter,
    useClass: CompanyPresenterImpl,
  },
  {
    token: CompanyRepository,
    useClass: CompanyRepositoryImpl,
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
