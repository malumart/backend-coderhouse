const http = require ('http');

const server = http.createServer((request, response) => {
    response.end('hola mundo desde un servidor')
})

server.listen(8080, () => {
    console.log('listening from port 8080')
})


