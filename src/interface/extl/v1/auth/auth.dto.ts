import {IsEmail, IsNotEmpty, Matches, MaxLength, MinLength} from "class-validator";
import { User } from "../../../../core/entity";

export class AuthSignUpDto extends User {
  @IsNotEmpty()
  @MinLength(6)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      "passwords should contain at least 1 upper case letter|" +
      "passwords should contain at least 1 lower case letter|" +
      "passwords should contain at least 1 number or special character",
  })
  password: string;

  bind(user: User): AuthSignUpDto {
    Object.keys(user).forEach((key: string) => {
      this[key] = user[key];
    });
    return this;
  }
}

export class AuthSignInDto extends User {
  @IsNotEmpty()
  @MinLength(6)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  bind(user: User): AuthSignInDto {
    Object.keys(user).forEach((key: string) => {
      this[key] = user[key];
    });
    return this;
  }
}
