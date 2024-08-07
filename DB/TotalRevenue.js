import express from 'express'
export const RevenueRouter = express.Router()

RevenueRouter.get('/', async (_, res) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('totalprice,tax,shipping,total')

    if (data) {
      return res.json(data, { status: 201 })
    }
    return res.json({ error }, { status: 400 })
  } catch (error) {
    return res.json({ message: error.message }, { status: 500 })
  }
})
