import { model, Schema } from "mongoose"
import { IPost } from "../interfaces"

const PostSchema = new Schema<IPost>(
  {
    name: {
      type: String,
      required: [ true, '名稱必填' ]
    },
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    tags: {
      type: [String],
      default: []
    },
    type: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      required: [ true, '按讚數必填' ]
    },
    comments: {
      type: Number,
      required: [ true, '評論數必填' ]
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: false
    }
  },
  {
    versionKey: false
  }
)

const Post = model<IPost>('Post', PostSchema)

export {
  Post,
  PostSchema
}