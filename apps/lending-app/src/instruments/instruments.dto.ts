import { Instrument } from '@prisma/client';

export type CreateInstrumentDto = Omit<
  Instrument,
  'id' | 'created_at' | 'updated_at' | 'owner_id'
>;
