export interface CompanyEntityInterface {
  id?: number;
  company_name?: string;
  created_by?: number;
  created_at?: string;
}

export class Company implements CompanyEntityInterface {
  id?: number;
  company_name?: string;
  created_by?: number;
  created_at?: string;

  constructor(company?: Company) {
    if (company != null) {
      this.entity(company);
    }
  }

  entity(company: Company): Company {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }

  bind(company: Company): Company {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }

  bindObject(company: object): Company {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }
}
