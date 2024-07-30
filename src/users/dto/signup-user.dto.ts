import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class SignUpUserDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  username: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(120)
  fullname: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(12)
  password: string;
}
