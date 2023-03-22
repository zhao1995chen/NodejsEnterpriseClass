import * as express from 'express'

const app = express()
const PORT = 3000

app.listen(3000)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Login Page')
})

app.get('/signup', (req, res) => {
  res.send('Sign Up Page')
})

app.get('/wall', (req, res) => {
  res.send('All Wall Page')
})

app.get('/wall/:id', (req, res) => {
  const { id } = req.params
  res.send(`${id} Wall Page`)
})

app.get('/follow/:id', (req, res) => {
  const { id } = req.params
  res.send(`${id} Follow Page`)
})

