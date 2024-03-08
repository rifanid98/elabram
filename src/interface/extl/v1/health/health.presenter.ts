import { User, UserEntityInterface } from "../../../../core/entity/user.entity";
import { singleton } from "tsyringe";

export class HealthPresenter {
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
export class AuthPresenterImpl implements HealthPresenter {
  show(entity: User): User {
    const presenter = new User();
    presenter.id = entity.id;
    presenter.email = entity.email;
    return presenter;
  }

  showAll(entity: User): User {
    const presenter = new User();
    Object.keys(entity).forEach((key: string) => {
      if (key !== "password") {
        presenter[key] = entity[key];
      }
    });
    return presenter;
  }

  json(entity: User): UserEntityInterface {
    return { ...entity };
  }
}
