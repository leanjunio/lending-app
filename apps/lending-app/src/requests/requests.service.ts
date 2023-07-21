import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  async createBorrowRequest(borrowerId: number, instrumentId: number) {
    return this.prisma.requests.create({
      data: {
        borrower_id: borrowerId,
        instrument_id: Number(instrumentId)
      }
    });
  }

  async findPendingRequests(lenderId: number, status: string) {
    return this.prisma.requests.findMany({
      where: {
        instrument: {
          owner_id: lenderId
        },
        status
      }
    });
  }

  async respondToRequest(id: string, approve: boolean) {
    return this.prisma.requests.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status: approve ? 'approved' : 'rejected'
      }
    });
  }

  async getRequestedInstruments(borrowerId: string) {
    return this.prisma.requests.findMany({
      where: {
        borrower_id: parseInt(borrowerId),
        status: 'confirmed'
      }
    });
  }
}
