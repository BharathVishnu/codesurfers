import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://klhplyuzrtlxonthurtt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaHBseXV6cnRseG9udGh1cnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NjU0MzYsImV4cCI6MjAzMDM0MTQzNn0.23iX29wBVktJsOsGOKShIYaG43job5UImIdMGRnTE9Q';

export const supabase = createClient(supabaseUrl, supabaseKey);