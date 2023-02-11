const http = require('http');

server.on('request', (req, res) => {
  res.end('Welcome')
})


server.listem('5000')
server