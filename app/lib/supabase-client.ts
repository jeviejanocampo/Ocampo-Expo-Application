import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dfpreljsatbmxidvnuxu.supabase.co';

const SUPABASE_ANON_KEY_NICE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcHJlbGpzYXRibXhpZHZudXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3ODM0MjgsImV4cCI6MjA3NjM1OTQyOH0.MU_H4UzfAs8-PwHStPwtNLFKWDpM3PtCGiQD9-vWKwY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY_NICE);
