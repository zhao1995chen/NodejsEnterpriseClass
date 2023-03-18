const http = require('http')
const { v4: uuidv4 } = require('uuid')
const errorHandler = require('./errorHandler')
const METHOD = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  OPTIONS: 'OPTIONS'
}
const headers = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
  'Content-Type': 'application/json'
}
const data = [
  {
    id: uuidv4(),
    title: '11111'
  },
  {
    id: uuidv4(),
    title: '11111'
  },
  {
    id: uuidv4(),
    title: '11111'
  },
]

const requestListener = (req, res) => {
  const { url, method } = req
  let body = ''

  req.on('data', chunk => {
    // console.log(chunk)
    body += chunk
  })

  req.on('end', () => { 
    if(url.includes('/todos')) {  
      switch (method) {
        case METHOD.GET:
          res.writeHead(200, headers)
          res.write(JSON.stringify({
            status: 'success',
            data
          }))
          res.end()
          break
        case METHOD.POST:
          try {
            body = JSON.parse(body)
            body.id = uuidv4()
            data.push(body)
            res.writeHead(200, headers)
            res.write(JSON.stringify({
              status: 'success',
              data
            }))
            res.end()
          }catch(e) {
            errorHandler(res)
          }
          break
        case METHOD.DELETE:
          try {
            if (url === '/todos') {
              // 刪除全部
              data.length = 0
              res.writeHead(200, headers)
              res.write(JSON.stringify({
                status: 'success',
                data
              }))
              res.end()
            } else {
              // 刪除單筆
              const title = JSON.parse(body).title
              const id = url.split('/').pop()
              const index = data.findIndex(todo => todo.id === id)
              if (index === -1) {
                errorHandler(res)
              } else {
                data[index].title = title
                res.writeHead(200, headers)
                res.write(JSON.stringify({
                  status: 'success',
                  data
                }))
                res.end()
              }
            }
          } catch(e) {
            errorHandler(res)
          }
          break
        case METHOD.OPTIONS:
          res.write('Verified')
          break
        default:
          res.write('Are you sure?')
          res.end()
      }
    } else {
      errorHandler(res)
    }
  })
  
}

http.createServer(requestListener).listen(3005)