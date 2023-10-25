import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @MinLength(8, {
    message: 'Password is to short',
  })
  @IsNotEmpty()
  password: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  address: string;
}
