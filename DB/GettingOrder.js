import express from 'express'
import { supabase } from '../Supabase.js'
export const OrderRouter = express.Router()

OrderRouter.get('/', async (res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) {
      return res.status(201).json(data)
    }
    return res.status(400).json({ error })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})
