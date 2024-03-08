export interface UserEntityInterface {
  id?: string;
  email?: string;
  password?: string;
  fullname?: string;
  token?: string;
  created_at?: string;
  updated_at?: string;
}

export class User implements UserEntityInterface {
  id?: string;
  email?: string;
  password?: string;
  fullname?: string;
  token?: string;
  created_at?: string;
  updated_at?: string;

  constructor(user?: User) {
    if (user != null) {
      this.entity(user);
    }
  }

  entity(user: User): User {
    Object.keys(user).forEach((key: string) => {
      this[key] = user[key];
    });
    return this;
  }

  bind(user: User): User {
    Object.keys(user).forEach((key: string) => {
      this[key] = user[key];
    });
    return this;
  }

  bindObject(user: object): User {
    Object.keys(user).forEach((key: string) => {
      this[key] = user[key];
    });
    return this;
  }
}
