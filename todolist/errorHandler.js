const errorHandler = (res) => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
    'Content-Type': 'application/json'
  }
  res.writeHead(404, headers)
  res.write(JSON.stringify({
    status: 'failed',
    message: '資料錯誤'
  }))
  res.end()
}

module.exports = errorHandler