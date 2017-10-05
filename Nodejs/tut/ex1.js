var http = require('http');
var fs = require('fs');
// Create an HTTP tunneling proxy
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
// now that proxy is running
server.listen(1717, '127.0.0.1');
