import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cwjrkgjnrxbvrujupmht.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3anJrZ2pucnhidnJ1anVwbWh0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDUwOTgyNywiZXhwIjoyMDc2MDg1ODI3fQ.KIJuJxx7T41pRaSnLo0_mCkeYHni1V4pVmCdD5FVIUg';
export const supabase = createClient(supabaseUrl, supabaseKey);
