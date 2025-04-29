import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bpcuxzxwxcgsmwkmszun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwY3V4enh3eGNnc213a21zenVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNjUwMDUsImV4cCI6MjA1OTc0MTAwNX0.rIGc9cAJ2wh01yqD8R_yOANVK8Lhv6HN8yTdzLcRJi4'
export const supabase = createClient(supabaseUrl, supabaseKey)
