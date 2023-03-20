import express from 'express'
export const user = express.Router()

user.get('/profile', (req, res) => {
  res.send('<html><head></head><body><h1>Profile</h1></body></html>')
})

user.get('/record', (req, res) => {
  res.send('<html><head></head><body><h1>Record</h1></body></html>')
})

user.get('/card', (req, res) => {
  res.send('<html><head></head><body><h1>Card</h1></body></html>')
})

user.get('/payment', (req, res) => {
  res.send('<html><head></head><body><h1>Payment</h1></body></html>')
})
