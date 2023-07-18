import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from '../users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(login: LoginDto) {
    const user = await this.userService.findOne(login.email);
    if (user?.password !== login.password) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, role: user.user_type, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
