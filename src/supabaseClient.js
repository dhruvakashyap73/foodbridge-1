import { createClient } from '@supabase/supabase-js'

// Use your Supabase project URL and anon/public key
const supabaseUrl = 'https://qasuknemeeakokxkfmip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhc3VrbmVtZWVha29reGtmbWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMjEyMTUsImV4cCI6MjA3ODY5NzIxNX0.LDvJ9QsuXNAj19YZ3LRNh7HYJcXjQzy2-2Ls_umCWsI' // Replace with your anon/public key

export const supabase = createClient(supabaseUrl, supabaseKey)
