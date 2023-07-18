import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Database } from '../database.types';

@Injectable()
export class DatabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient<Database>(
      process.env.SUPABASE_URI,
      process.env.SUPABASE_KEY
    );
  }

  getSupabase() {
    return this.supabase;
  }
}
