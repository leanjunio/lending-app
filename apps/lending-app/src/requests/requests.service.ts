import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}
}
