import { autoInjectable, inject, registry, singleton } from "tsyringe";
import { CompanyRepositoryProvider } from "../../../../di/provider/company/company-repository.provider";
import KnexInstance from "../knex/knex";
import { Logger } from "../../../../core/port/infrastructure";
import { Company } from "../../../../core/entity/company.entity";
import {
  CompanyRepository,
  Result,
} from "../../../../core/port/repository/company.repository";

@singleton()
@autoInjectable()
@registry(CompanyRepositoryProvider)
export class CompanyRepositoryImpl extends CompanyRepository {
  constructor(
    @inject("Knex") private db: KnexInstance,
    private logger: Logger,
  ) {
    super();
  }

  async createCompany(company: Company): Promise<Result> {
    try {
      const result = await this.db.knex.insert(company).into(this.table);
      company.id = result[0];
      return Promise.resolve({ company: company });
    } catch (e) {
      this.logger.Error(e);
      return Promise.reject();
    }
  }

  async getCompanyById(id: number): Promise<Result> {
    try {
      const companys: Company[] = await this.db
        .knex<Company>(this.table)
        .select("*")
        .where({ id: id });

      if (companys.length < 1) {
        return {};
      }

      const company = new Company(companys[0]);

      return { company: JSON.parse(JSON.stringify(company)) };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async getCompanyByName(name: string): Promise<Result> {
    try {
      const companies: Company[] = await this.db
        .knex<Company>(this.table)
        .select("*")
        .where({ company_name: name });

      if (companies.length < 1) {
        return {};
      }

      const company = new Company(companies[0]);

      return { company: JSON.parse(JSON.stringify(company)) };
    } catch (e) {
      this.logger.Error(e);
      return { error: e };
    }
  }

  async updateCompany(company: Company): Promise<boolean> {
    try {
      const update = await this.db
        .knex<Company>(this.table)
        .where({ id: company.id })
        .update(company);

      if (update < 0) {
        return false;
      }

      return true;
    } catch (e) {
      this.logger.Error(e);
      return false;
    }
  }

  async deleteCompany(company: Company): Promise<boolean> {
    try {
      const deleted = await this.db
        .knex<Company>(this.table)
        .where({ id: company.id })
        .delete();

      if (deleted < 0) {
        return false;
      }

      return true;
    } catch (e) {
      this.logger.Error(e);
      return false;
    }
  }
}
