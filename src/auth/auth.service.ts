import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  public hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
