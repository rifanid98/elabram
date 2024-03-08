import { User, UserEntityInterface } from "../../../../core/entity/user.entity";
import { singleton } from "tsyringe";

export class AuthPresenter {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  json(entity: User): UserEntityInterface {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show(entity: User): User {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showAll(entity: User): User {
    return undefined;
  }
}

@singleton()
export class AuthPresenterImpl implements AuthPresenter {
  show(entity: User): User {
    const presenter = new User();
    presenter.id = entity.id;
    presenter.email = entity.email;
    presenter.fullname = entity.fullname;
    return presenter;
  }

  showAll(entity: User): User {
    const presenter = new User();
    Object.keys(entity).forEach((key: string) => {
      if (!["password", "token"].includes(key)) {
        presenter[key] = entity[key];
      }
      if (["created_at", "updated_at"].includes(key)) {
        presenter[key] = this.jakartaTime(entity[key]);
      }
    });
    return presenter;
  }

  json(entity: User): UserEntityInterface {
    return { ...entity };
  }

  private jakartaTime(date: string): string {
    let split = date.split(" ");
    const parsed = Date.parse(split[0] + "T" + split[1] + "Z");
    const newdate = new Date(parsed + 7 * 60 * 60 * 1000);
    split = newdate.toISOString().split("T");
    return split["0"] + " " + split[1].split(".")[0];
  }
}
