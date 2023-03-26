export interface IPost {
  _id?: string
  name: string
  content: string
  image: string
  tags: Array<string>
  type: string
  likes: number
  comments: number
  createdAt: Date // timestamp
}