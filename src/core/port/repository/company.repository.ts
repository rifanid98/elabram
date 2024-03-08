import { Company } from "core/entity/company.entity";

export type Result = {
  error?: Error;
  message?: string;
  company?: Company;
  companies?: Company[];
};

interface CompanyRepositoryInterface {
  createCompany(company: Company): Promise<Result>;
  getCompanyById(id: number): Promise<Result>;
  getCompanyByName(name: string): Promise<Result>;
  updateCompany(company: Company): Promise<boolean>;
  deleteCompany(company: Company): Promise<boolean>;
}

export class CompanyRepository implements CompanyRepositoryInterface {
  protected table: string = "company";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createCompany(company: Company): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCompanyById(id: number): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCompanyByName(name: string): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateCompany(company: Company): Promise<boolean> {
    return Promise.resolve(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteCompany(company: Company): Promise<boolean> {
    return Promise.resolve(false);
  }
}
