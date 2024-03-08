import { CompanyPresenter } from "../../../interface/extl/v1/company/company.presenter";
import { Company } from "../../../core/entity/company.entity";
import { autoInjectable, injectable, registry, singleton } from "tsyringe";
import { CompanyService, Result } from "../../port/service/company.service";
import { CompanyRepository } from "../../port/repository/company.repository";
import { Logger } from "../../port/infrastructure";
import { CompanyServiceProvider } from "../../../di/provider/company";

@singleton()
@autoInjectable()
@injectable()
@registry(CompanyServiceProvider)
export class CompanyServiceImpl extends CompanyService {
  constructor(
    private presenter: CompanyPresenter,
    private companyRepository: CompanyRepository,
    private logger: Logger,
  ) {
    super();
  }

  async create(company: Company): Promise<Result> {
    try {
      const current = await this.companyRepository.getCompanyByName(
        company.company_name,
      );
      if (current.error) {
        return { error: current.error };
      }
      if (current.company) {
        return { error: new Error("company already exist") };
      }

      const result = await this.companyRepository.createCompany(company);
      if (result.error) {
        return { error: result.error };
      }

      console.log({
        company: this.presenter.showAll(result.company),
      });

      return {
        company: this.presenter.showAll(result.company),
      };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async view(company: Company): Promise<Result> {
    try {
      const result = await this.companyRepository.getCompanyById(company.id);
      if (result.error) {
        return { error: result.error };
      }
      if (!result.company) {
        return { error: new Error("company does not exist") };
      }
      return {
        company: this.presenter.showAll(result.company),
      };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async delete(company: Company): Promise<Result> {
    try {
      const current = await this.companyRepository.getCompanyById(company.id);
      if (current.error) {
        return { error: current.error };
      }
      if (!current.company) {
        return { error: new Error("company does not exist") };
      }

      const result = await this.companyRepository.deleteCompany(company);
      if (!result) {
        return {};
      }

      return {
        company: company,
      };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async edit(company: Company): Promise<Result> {
    try {
      const current = await this.companyRepository.getCompanyById(company.id);
      if (current.error) {
        return { error: current.error };
      }
      if (!current.company) {
        return { error: new Error("company does not exist") };
      }

      const check = await this.companyRepository.getCompanyByName(
        company.company_name,
      );
      if (check.error) {
        return { error: check.error };
      }
      console.log();
      if (check?.company?.id && check?.company?.id != company.id) {
        return { error: new Error("company already exist") };
      }

      const result = await this.companyRepository.updateCompany(company);
      if (!result) {
        return {};
      }

      return {
        company: this.presenter.showAll(company),
      };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }
}
