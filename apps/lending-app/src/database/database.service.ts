import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable()
export class DatabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      process.env.SUPABASE_URI,
      process.env.SUPABASE_KEY
    );
  }

  getSupabase() {
    return this.supabase;
  }
}
