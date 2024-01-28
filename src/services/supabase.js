import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eibcnpgyqzkcqprjbwht.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpYmNucGd5cXprY3Fwcmpid2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NDI1NDAsImV4cCI6MjAxNzUxODU0MH0.DS6799eqrbDvZ8a53KW7D5PPuksKUwxnncl-siCK_gk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
