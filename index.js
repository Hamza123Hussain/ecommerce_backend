import express from 'express'
import { Port } from './Config.js'
const app = express()

app.listen(Port, () => {
  console.log(`ruuning on ${Port} port`)
})
