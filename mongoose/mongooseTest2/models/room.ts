import * as mongoose from 'mongoose'
const { Schema } = mongoose

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

export const Room = mongoose.model('Room', schema)

