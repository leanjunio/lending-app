import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';

@Module({
  providers: [RequestsService, PrismaService],
  controllers: [RequestsController]
})
export class RequestsModule {}
