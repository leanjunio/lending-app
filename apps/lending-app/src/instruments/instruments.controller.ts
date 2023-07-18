import { Controller, Post } from '@nestjs/common';
import { Roles } from '../users/roles.decorator';

@Controller('instruments')
export class InstrumentsController {
  @Post()
  @Roles('lender')
  async create() {
    console.log('reached');
  }
}
