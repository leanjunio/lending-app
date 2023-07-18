import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { CreateInstrumentDto } from './instruments.dto';

@Injectable()
export class InstrumentsService {
  constructor(private prisma: PrismaService) {}

  async findAvailableInstruments() {
    return this.prisma.instrument.findMany({
      where: {
        availability: true
      }
    });
  }

  async createInstrument(instrument: CreateInstrumentDto, userId: number) {
    return this.prisma.instrument.create({
      data: {
        ...instrument,
        owner: {
          connect: {
            id: userId
          }
        }
      }
    });
  }
}
