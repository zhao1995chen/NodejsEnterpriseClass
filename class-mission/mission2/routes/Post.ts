import { HEADERS, METHOD } from '../const'
import { errorHandler } from '../services/errorHandler'
import { PostController } from '../controllers/Post'
import { IncomingMessage, ServerResponse } from 'http'

export const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req
  let body = ''

  req.on('data', (chunk: string) => {
    body += chunk
  })

  req.on('end', async () => {
    if(url?.includes('/posts')) {  
      switch (method) {
        case METHOD.GET:
          PostController.getAll(res)
          break
        case METHOD.POST:
          PostController.create(res, body)
          break
        case METHOD.PATCH:
          PostController.update(res, body)
          break
        case METHOD.DELETE:
          if (url === '/posts') {
            // 刪除全部
            PostController.deleteAll(res)
          } else {
            // 刪除單筆
            const _id = req.url?.split('/').pop() || ''
            PostController.deleteById(res, _id)
          }
          break
        case METHOD.OPTIONS:
          res.writeHead(200, HEADERS)
          res.end()
          break
      }
    } else {
      errorHandler(res, '錯誤路由')
    }
  })
}