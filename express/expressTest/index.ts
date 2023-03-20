import express from 'express'
const app = express()

app.get('/', (req, res) => {
  // res.send('1234')
  res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
})

// several routes
app.get('/story', (req, res) => {
  res.send('<html><head></head><body><h1>Story</h1></body></html>')
})

app.get('/profile', (req, res) => {
  res.send('<html><head></head><body><h1>Profile</h1></body></html>')
})

app.get('/story/:name/:date', (req, res) => {
  const { name, date } = req.params
  console.log(name, date)
  res.send(`<html><head></head><body><h1>${name} ${date}</h1></body></html>`)
})

app.get('/time/', (req, res) => {
  const { q, date } = req.query
  console.log('query', q, date)
  res.send(`<html><head></head><body><h1>${q} ${date}</h1></body></html>`)
})

let port = process.env.PORT || 3000
app.listen(port)