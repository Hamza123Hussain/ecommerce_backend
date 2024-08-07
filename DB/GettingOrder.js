import express from 'express'
import { supabase } from '../Supabase.js'
export const OrderRouter = express.Router()

OrderRouter.get('/', async () => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) {
      return NextResponse.json(data, { status: 201 })
    }
    return NextResponse.json({ error }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
})
