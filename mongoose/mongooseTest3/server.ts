import * as http from 'http'
import * as mongoose from 'mongoose'
import { HEADERS, METHOD } from './config'
import { errorHandler } from './errorHandler'
import { Room, schema } from './models/room'

mongoose.connect('mongodb://localhost:27017/hotel')
  .then(() => console.log('Server 連線成功'))
  .catch(({reason}) => console.log(reason))

const requestListener = (req: any, res: any) => {
  const { url, method } = req
  let body = ''

  req.on('data', (chunk: String) => {
    // console.log(chunk)
    body += chunk
  })

  req.on('end', async () => { 
    if(url.includes('/hotel/rooms')) {  
      switch (method) {
        case METHOD.GET:
          res.writeHead(200, HEADERS)
          const data = await Room.find()
          res.write(JSON.stringify({
            status: 'success',
            data
          }))
          res.end()
          break
        case METHOD.POST:
          try {
            const data = JSON.parse(body)
            console.log(data)
            const newRoom = await Room.create(data, schema)
            res.writeHead(200, HEADERS)
            res.write(JSON.stringify({
              status: 'success',
              data: newRoom
            }))
            res.end()
          }catch(e) {
            errorHandler(res, e)
          }
          break
        case METHOD.DELETE:
          try {
            if (url === '/hotel/rooms') {
              // 刪除全部
              await Room.deleteMany()
              res.writeHead(200, HEADERS)
              res.write(JSON.stringify({
                status: 'success',
                data: []
              }))
              res.end()
            } else {
              // 刪除單筆
              try {
                const _id = url.split('/').pop()
                const exist = await Room.find({ _id }).count()
                if (exist) {
                  await Room.deleteOne({ _id })

                  res.writeHead(200, HEADERS)
                  res.write(JSON.stringify({
                    status: 'success'
                  }))
                  res.end()
                } else {
                  errorHandler(res, '沒有對應資料')
                }
              } catch(e) {
                errorHandler(res, e)
              }
            }
          } catch(e) {
            errorHandler(res, e)
          }
          break
        // case METHOD.OPTIONS:
        //   res.write('Verified')
        //   break
        // default:
          // res.write('Are you sure?')
          // res.end()
          // break
      }
    } else {
      errorHandler(res)
    }
  })
}
const server = http.createServer(requestListener)
server.listen(3005)