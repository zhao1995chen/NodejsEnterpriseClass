import express from 'express'

const app = express()
const PORT = 3000

app.listen(PORT, () => {{
  console.log('連線成功')
}})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
