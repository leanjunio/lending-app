import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const CreateInstrumentSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  instrument_type: z.string().optional(),
  rate: z.number().optional(),
  availability: z.boolean().default(true)
});

export class CreateInstrumentDto extends createZodDto(CreateInstrumentSchema) {}
