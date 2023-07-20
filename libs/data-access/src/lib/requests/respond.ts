import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const RespondRequestSchema = z.object({
  approve: z.boolean()
});

export class RespondRequestDto extends createZodDto(RespondRequestSchema) {}
