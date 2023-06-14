import express from 'express'
const app = express()
const port = 8000

import bodyParser from 'body-parser'
app.use(bodyParser.json()) 
import cors from "cors"
import { getRoots } from './routes.mjs'
app.use(cors())

app.get('/', getRoots)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})