import express from 'express'
import { supabase } from '../Supabase.js'

const Router = express.Router()

Router.post('/', async (req, res) => {
  try {
    const payload = req.body

    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: payload?.Product.name,
          description: payload?.Product.description,
          price: parseFloat(payload?.Product.price.toString()),
          stock: parseInt(payload?.Product.stock.toString()),
          category: payload?.Product.category,
          image_url: payload?.Product.image_url,
          quantity: payload?.Product.quantity,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()

    if (data) {
      res.status(201).json(data)
    } else {
      res.status(404).json({ error })
    }
  } catch (error) {
    console.error('DATABASE ERROR:', error)
    res.status(500).json({ error: 'Database error' })
  }
})

// GET route to fetch products
Router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('products').select('*')

    if (error) {
      console.error('Supabase error:', error)
      return res.status(404).json({ error: error.message })
    }

    console.log('Fetched data from Supabase:', data)
    return res.status(200).json(data)
  } catch (error) {
    console.error('Database error:', error)
    return res.status(500).json({ error: 'Database error' })
  }
})
export default Router
