import { ServerResponse } from 'http'
import { HEADERS } from '../const'

export const errorHandler = (res: ServerResponse, e?: any) => {
  res.writeHead(404, HEADERS)
  res.write(JSON.stringify({
    status: 'Failed',
    message: e?.message || e
  }))
  res.end()
}
