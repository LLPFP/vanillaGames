import { createClient } from "@supabase/supabase-js";
//Creando la conexión con supabase
const supabaseUrl = "https://fxegjvostkhwigwkyyeg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4ZWdqdm9zdGtod2lnd2t5eWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwMDEyMTUsImV4cCI6MjA1MzU3NzIxNX0.ipFg4zGK0uOdN3IKnrUfIRFQNIZIpQ5RW8now914js8";
//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey);
