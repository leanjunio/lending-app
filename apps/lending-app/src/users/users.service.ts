import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  private dbInstance;

  constructor(private dbService: DatabaseService) {
    this.dbInstance = dbService.getSupabase();
  }

  async findAll() {
    const users = await this.dbInstance.from('users').select();
    return users;
  }

  async findOne(email: string, password: string) {
    const user = await this.dbInstance
      .from('users')
      .select()
      .eq('email', email)
      .eq('password', password);
    console.log({ user });

    if (user.data.length === 0) {
      throw new HttpException('No Content', HttpStatus.NO_CONTENT);
    }

    return user;
  }
}
