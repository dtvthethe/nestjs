import { HttpException, Injectable } from '@nestjs/common';
import { SignUpUserDto } from './dto/signup-user.dto';
import { UserRepository } from './users.repository';
import { User } from './user.entity';
import { AuthService } from 'src/auth/auth.service';
import { SignInUserDto } from './dto/signin-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository, private readonly authService: AuthService) { }

  public async createUser(userDto: SignUpUserDto): Promise<User> {
    try {
      const { username, password, fullname } = userDto;
      const user: User = new User();
      user.username = username;
      user.fullname = fullname;
      user.password = this.authService.hashPassword(password);

      return await this.userRepository.save(user);
    } catch (error) {
      throw new HttpException(error.message, 501);
    }
  }

  public async signIn(userDto: SignInUserDto): Promise<any> {
    return "Sign In";
  }
}
