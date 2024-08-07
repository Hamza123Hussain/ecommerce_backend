import { createClient } from '@supabase/supabase-js'
import { supabaseKey, supabaseUrl } from './Config.js'

export const supabase = createClient(supabaseUrl, supabaseKey)
