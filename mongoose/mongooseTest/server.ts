const http = require('http')
const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://localhost:27017/hotel')
  .then(() => console.log('Server 連線成功'))
  .catch(({reason}) => console.log(reason))

const schema = new Schema(
  {
    name: String,
    price: {
      type: Number,
      required: [ true, '價格必填' ]
    },
    rating: Number
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const Room = mongoose.model('Room', schema)

// use save() to insert document
// const room = new Room({
//   name: '總統套房2',
//   price: 5000,
//   rating: 4.9
// })

// room.save().then(() => console.log('新增資料成功'))

// use create() to insert document
Room.create({
  name: '迎賓套房',
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