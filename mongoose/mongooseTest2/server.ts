import * as http from 'http'
import * as mongoose from 'mongoose'
import { Room } from './models/room'

mongoose.connect('mongodb://localhost:27017/hotel')
  .then(() => console.log('Server 連線成功'))
  .catch(({reason}) => console.log(reason))

Room.create({
  name: '迎賓套房-module',
  price: 3000,
  rating: 3.9
})
  .then(() => console.log('新增資料成功'))
  
const requestListener = (req, res) => {
  console.log(req.url)
  res.end()
}
const server = http.createServer(requestListener)
server.listen(3005)