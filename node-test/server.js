const http = require('http')
http.createServer((request, response) => {
  // response.writeHead(
  //   '200',
  //   { 
  //     'Content-Type': 'text/plain'
  //   }
  // )
  response.write('hello')
  response.end()
}).listen(8080)