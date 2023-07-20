import {
  PipeTransform,
  Injectable,
  NotFoundException,
  Inject,
  ArgumentMetadata
} from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class ResourceExistsPipe implements PipeTransform {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @Inject(PrismaService) private readonly prisma: PrismaService
  ) {}

  async transform(value, metadata: ArgumentMetadata) {
    const id = this.request.params.id;
    const { data } = metadata;

    const resource = await this.prisma[data].findUnique({
      where: {
        id: Number(id)
      }
    });

    if (!resource) {
      throw new NotFoundException(`Resource ${data} with id ${id} not found`);
    }

    return value;
  }
}
