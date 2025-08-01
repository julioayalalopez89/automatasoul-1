// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kijrrkmvdbouroxzkzrx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpanJya212ZGJvdXJveHprenJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjMwMTQsImV4cCI6MjA2OTQ5OTAxNH0.XdqOHAhYYevD-TkreZCuSNJirSmv11mG5zbqRsgBkE8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
