import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const CreateBorrowRequestSchema = z.object({
  instrument_id: z.string()
});

export class CreateBorrowRequestDto extends createZodDto(
  CreateBorrowRequestSchema
) {}
