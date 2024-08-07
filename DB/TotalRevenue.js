import express from 'express'
import { supabase } from '../Supabase.js'
export const RevenueRouter = express.Router()

RevenueRouter.get('/', async (_, res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('totalprice,tax,shipping,total')
    if (data) {
      return res.status(201).json(data)
    }
    return res.status(400).json({ error })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})
