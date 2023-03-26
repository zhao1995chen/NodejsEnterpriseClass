import http from 'http'

import './connections'
import { requestListener } from './routes/Post'

const server = http.createServer(requestListener)
server.listen(process.env.PORT)