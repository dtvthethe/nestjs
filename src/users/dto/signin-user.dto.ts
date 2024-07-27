import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class SignInUserDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(12)
  password: string;
}
