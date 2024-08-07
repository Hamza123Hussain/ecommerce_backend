import express from 'express'
import { supabase } from '../Supabase.js'
export const UserRouter = express.Router()

UserRouter.get('/', async (_, res) => {
  try {
    const { data, error } = await supabase.from('Users').select('*')

    if (data) {
      return res.status(201).json(data)
    }
    return res.status(404).json(error)
  } catch (error) {
    return res.status(500).json({ message: `DATABASE ERROR ${error}` })
  }
})
