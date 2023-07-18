import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from '../users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto) {
    const found = await this.userService.findOne(
      loginDto.email,
      loginDto.password
    );

    if (found.data.length > 0) {
      const payload = { id: found.data[0].id, email: found.data[0].email };

      return {
        access_token: await this.jwtService.signAsync(payload)
      };
    }
  }
}
