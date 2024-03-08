import { IsNotEmpty, MinLength } from "class-validator";
import { Company } from "../../../../core/entity/company.entity";

export class CompanyCreateDto extends Company {
  @IsNotEmpty()
  @MinLength(6)
  company_name: string;

  bind(company: Company): CompanyCreateDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }

  bindObject(company: object): CompanyCreateDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }
}

export class CompanyViewDto extends Company {
  @IsNotEmpty()
  id: number;

  bind(company: Company): CompanyViewDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }

  bindObject(company: object): CompanyViewDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }
}

export class CompanyUpdateDto extends Company {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @MinLength(6)
  company_name: string;

  bind(company: Company): CompanyUpdateDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }

  bindObject(company: object): CompanyUpdateDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }
}

export class CompanyDeleteDto extends Company {
  @IsNotEmpty()
  id: number;

  bind(company: Company): CompanyDeleteDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }

  bindObject(company: object): CompanyDeleteDto {
    Object.keys(company).forEach((key: string) => {
      this[key] = company[key];
    });
    return this;
  }
}
