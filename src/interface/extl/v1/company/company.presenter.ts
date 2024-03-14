import { singleton } from "tsyringe";
import {
  Company,
  CompanyEntityInterface,
} from "../../../../core/entity/company.entity";

export class CompanyPresenter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  json(entity: Company): CompanyEntityInterface {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show(entity: Company): Company {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showAll(entity: Company): Company {
    return undefined;
  }
}

@singleton()
export class CompanyPresenterImpl implements CompanyPresenter {
  show(entity: Company): Company {
    const presenter = new Company();
    presenter.id = entity.id;
    presenter.company_name = entity.company_name;
    presenter.created_by = entity.created_by;
    presenter.created_at = entity.created_at;
    return presenter;
  }

  showAll(entity: Company): Company {
    const presenter = new Company();
    Object.keys(entity).forEach((key: string) => {
      if (["created_at"].includes(key)) {
        presenter[key] = this.jakartaTime(entity[key]);
      } else {
        presenter[key] = entity[key];
      }
    });
    return presenter;
  }

  json(entity: Company): CompanyEntityInterface {
    return { ...entity };
  }

  private jakartaTime(date: string): string {
    console.log(date);
    const parsed = Date.parse(date);
    const newdate = new Date(parsed + 7 * 60 * 60 * 1000);
    const split = newdate.toISOString().split("T");
    console.log(split["0"] + " " + split[1].split(".")[0]);
    return split["0"] + " " + split[1].split(".")[0];
  }
}
