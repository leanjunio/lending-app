import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../app/prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
