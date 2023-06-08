import express  from 'express'
const app = express()
const port = 8000
import  bodyParser from 'body-parser'
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})