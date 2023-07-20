import { Body, Controller, Post, Req } from '@nestjs/common';
import { Roles } from '../users/roles.decorator';
import { UseZodGuard } from 'nestjs-zod';
import { CreateBorrowRequestDto } from '@lending-app/data-access';

@Controller('requests')
export class RequestsController {
  @Post()
  @Roles('borrower')
  @UseZodGuard('body', CreateBorrowRequestDto)
  async createBorrowRequest(@Req() req, @Body() body) {
    return 'received request to borrow';
  }
}
