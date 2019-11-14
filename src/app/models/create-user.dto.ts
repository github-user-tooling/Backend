import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDTO {
  @MinLength(8)
  public username: string;

  @IsEmail()
  public email: string;

  @MinLength(8)
  public password: string;
}
