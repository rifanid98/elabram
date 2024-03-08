import { ProviderRegistry } from "../../type";
import { Logger, Validator } from "../../../core/port/infrastructure";
import { LoggerImpl } from "../../../infrastructure/logging";
import { ValidatorImpl } from "../../../infrastructure/validator/classvalidator/validator.impl";
import { CompanyService } from "../../../core/port/service/company.service";
import { CompanyServiceImpl } from "../../../core/service/company/company-service.impl";

export const CompanyControllerProvider: ProviderRegistry[] = [
  {
    token: CompanyService,
    useClass: CompanyServiceImpl,
  },
  {
    token: Logger,
    useClass: LoggerImpl,
  },
  {
    token: Validator,
    useClass: ValidatorImpl,
  },
];
