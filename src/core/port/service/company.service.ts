import { Company } from "core/entity/company.entity";

export type Result = {
  error?: Error;
  company?: Company;
};

interface CompanyServiceInterface {
  create(company: Company): Promise<Result>;
  view(company: Company): Promise<Result>;
  edit(company: Company): Promise<Result>;
  delete(company: Company): Promise<Result>;
}

export class CompanyService implements CompanyServiceInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(company: Company): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(company: Company): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  edit(company: Company): Promise<Result> {
    return Promise.resolve(undefined);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  view(company: Company): Promise<Result> {
    return Promise.resolve(undefined);
  }
}
