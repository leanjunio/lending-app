import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  Delete
} from '@nestjs/common';
import { Roles } from '../users/roles.decorator';
import { InstrumentsService } from './instruments.service';
import { UseZodGuard } from 'nestjs-zod';
import {
  CreateInstrumentDto,
  UpdateInstrumentDto
} from '@lending-app/data-access';
import { ResourceExistsPipe } from '../pipes/resource-exists.pipe';

@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}
  @Post()
  @Roles('lender')
  @UseZodGuard('body', CreateInstrumentDto)
  async create(@Req() req, @Body() body: CreateInstrumentDto) {
    return this.instrumentsService.createInstrument(body, req.user.userId);
  }

  @Get()
  async getAvailableInstruments() {
    return this.instrumentsService.findAvailableInstruments();
  }

  @Get()
  async getOwnedInstruments(@Req() req) {
    return this.getOwnedInstruments(req.user.userId);
  }

  @Put(':id')
  @Roles('lender')
  @UseZodGuard('body', UpdateInstrumentDto)
  async updateInstrument(@Param('id') id: string, @Req() req, @Body() body) {
    return this.instrumentsService.updateInstrument(id, body, req.user.userId);
  }

  @Delete(':id')
  @Roles('lender')
  async deleteInstrument(
    @Param('instrument', ResourceExistsPipe) id,
    @Req() req
  ) {
    return this.instrumentsService.deleteInstrument(id, req.user.userId);
  }
}
