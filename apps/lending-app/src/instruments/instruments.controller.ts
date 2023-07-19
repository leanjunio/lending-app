import { Body, Controller, Post, Req } from '@nestjs/common';
import { Roles } from '../users/roles.decorator';
import { Request } from 'express';
import { InstrumentsService } from './instruments.service';

@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}
  @Post()
  @Roles('lender')
  async create(@Body() request: Request) {
    console.log(request);
    // return this.instrumentsService.createInstrument()
  }
}
