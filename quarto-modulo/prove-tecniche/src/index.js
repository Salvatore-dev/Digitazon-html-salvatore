import express  from 'express'
const app = express()
const port = 3000
import  bodyParser from 'body-parser'
app.use(bodyParser.json())

//import cors from 'cors'
//app.use(cors())

import * as metadata from "./ruotesMetaData.mjs"
import { getChapters } from './routes-chapters.mjs'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/metadata/books', metadata.getBooks)
app.get('/metadata/versions', metadata.getVersions)
app.get('/metadata/index-CEI2008', metadata.getIndexVersion)

app.post('/chapters', getChapters)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
