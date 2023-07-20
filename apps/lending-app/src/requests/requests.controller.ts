import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Roles } from '../users/roles.decorator';
import { UseZodGuard } from 'nestjs-zod';
import {
  CreateBorrowRequestDto,
  RespondRequestDto
} from '@lending-app/data-access';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  @Roles('borrower')
  @UseZodGuard('body', CreateBorrowRequestDto)
  async createBorrowRequest(@Req() req, @Body() body) {
    return this.requestsService.createBorrowRequest(
      req.user.userId,
      body.instrument_id
    );
  }

  @Get(':status')
  @Roles('lender')
  async getPendingRequests(@Req() req, @Param('status') status: string) {
    return this.requestsService.findPendingRequests(req.user.userId, status);
  }

  @Put(':id')
  @Roles('lender')
  @UseZodGuard('body', RespondRequestDto)
  async respondToRequest(@Param('id') id: string, @Body() body) {
    return this.requestsService.respondToRequest(id, body.approve);
  }
}
