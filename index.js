import express from 'express'
import { Port } from './Config.js'
import Router from './DB/ProductCrud.js'
const app = express()

app.use(express.json())

app.use('/api/Products', Router)

app.listen(Port, () => {
  console.log(`ruuning on ${Port} port`)
})
