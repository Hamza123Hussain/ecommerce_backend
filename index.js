import express from 'express'
import cors from 'cors' // Import the cors package
import { Port } from './Config.js'
import Router from './DB/ProductCrud.js'
import { OrderRouter } from './DB/GettingOrder.js'

const app = express()

// Apply CORS middleware with default options (allow all origins)
app.use(cors())

app.use(express.json())

app.use('/api/Products', Router)
app.use('/api/Orders', OrderRouter)

app.listen(Port, () => {
  console.log(`Running on port ${Port}`)
})
