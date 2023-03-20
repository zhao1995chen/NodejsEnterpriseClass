import express from 'express'
import { user } from './routes/user'

const app = express()

app.get('/', (req, res) => {
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
})

app.use('/user', user)

let port = process.env.PORT || 3000
app.listen(port)
