import * as mongoose from 'mongoose'
const { Schema } = mongoose

const schema = new Schema(
  {
    name: {
      type: String,
      required: [ true, '名稱必填' ]
    },
    price: {
      type: Number,
      required: [ true, '價格必填' ]
    },
    rating: {
      type: Number,
      required: [ true, '評價必填' ]
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
)

const Room = mongoose.model('Room', schema)

export {
  schema,
  Room
}