import { Module } from '@nestjs/common';
import { InstrumentsController } from './instruments.controller';
import { InstrumentsService } from './instruments.service';
import { DatabaseModule } from '../database/database.module';
import { PrismaService } from '../app/prisma.service';

@Module({
  imports: [DatabaseModule],
  providers: [InstrumentsService, PrismaService],
  controllers: [InstrumentsController]
})
export class InstrumentsModule {}
