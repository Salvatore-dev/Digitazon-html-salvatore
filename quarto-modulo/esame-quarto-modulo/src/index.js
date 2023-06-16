import express from 'express'
const app = express()
const port = 8000

import bodyParser from 'body-parser'
app.use(bodyParser.json()) 
import cors from "cors"
import { newAlbum, 
  allAlbums, 
  removeAlbum, 
  searchAlbum, 
  updateAlbum,
  searchPhoto,
  removePhoto
 } from './routes.mjs'
app.use(cors())

app.post('/albums', newAlbum)
app.get('/albums', allAlbums)

app.delete('/albums/:name', removeAlbum)
app.get('/albums/search', searchAlbum)
app.put('/albums/:name', updateAlbum)
app.get('/albums/:name/search', searchPhoto)
app.delete('/albums/:name/:photo', removePhoto)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})