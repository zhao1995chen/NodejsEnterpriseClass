import { HEADERS } from './config'

export const errorHandler = (res: any, e?: any) => {
  res.writeHead(404, HEADERS)
  res.write(JSON.stringify({
    status: 'failed',
    message: e.message || e
  }))
  res.end()
}
