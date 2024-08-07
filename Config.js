import 'dotenv/config'
const Port = process.env.Port
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET

export { Port, supabaseKey, supabaseUrl }
