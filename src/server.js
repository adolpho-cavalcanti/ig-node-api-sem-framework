import http from 'node:http'

const server = http.createServer((req, res) => {
    return res.end('DEUS é bom o tempo todo!')
})

server.listen(3334)