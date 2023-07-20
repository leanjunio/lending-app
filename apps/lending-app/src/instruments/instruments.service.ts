import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import {
  CreateInstrumentDto,
  UpdateInstrumentDto
} from '@lending-app/data-access';

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

  async findOwnedInstruments(userId: number) {
    return this.prisma.instrument.findMany({
      where: {
        owner_id: userId
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

  async updateInstrument(
    id: string,
    instrument: UpdateInstrumentDto,
    userId: number
  ) {
    return this.prisma.instrument.update({
      where: {
        id: parseInt(id),
        owner_id: userId
      },
      data: instrument
    });
  }

  async deleteInstrument(id: string, userId: number) {
    return this.prisma.instrument.delete({
      where: {
        id: parseInt(id),
        owner_id: userId
      }
    });
  }
}
