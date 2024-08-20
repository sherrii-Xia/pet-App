import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ygutrbjmukthzyupyegw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndXRyYmptdWt0aHp5dXB5ZWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMzMxMTYsImV4cCI6MjAzOTcwOTExNn0.xzXD4qj6AJDjVMF4BOouR9SPUlRmwrtrTu7q4fyEjQA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
