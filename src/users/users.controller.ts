import { Body, Controller, Post } from '@nestjs/common';
import { SignUpUserDto } from './dto/signup-user.dto';
import { UsersService } from './users.service';
import { SignInUserDto } from './dto/signin-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/signup')
    public async signUp(@Body() userDto: SignUpUserDto): Promise<any> {
        const { id, username, fullname } = await this.usersService.createUser(userDto);

        return {
            id,
            username,
            fullname
        };
    }

    @Post('/signin')
    public async signIn(@Body() userDto: SignInUserDto): Promise<any> {
        return this.usersService.signIn(userDto);
    }
}
