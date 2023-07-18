import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class UsersService {
  private dbInstance;

  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.dbInstance.from('users').select();
    return users;
  }

  async findOne(email: string) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        email
      }
    });
  }
}
