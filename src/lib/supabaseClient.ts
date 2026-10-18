// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  const missing = [
    !supabaseUrl && 'VITE_SUPABASE_URL',
    !supabaseAnonKey && 'VITE_SUPABASE_ANON_KEY',
  ].filter(Boolean).join(', ')
  throw new Error(
    `Falta configuración de Supabase: ${missing}. ` +
    'Copia .env.example a .env (o .env.local) y rellena los valores del proyecto en Supabase.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
