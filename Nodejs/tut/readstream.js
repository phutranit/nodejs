var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var myReadStream =  fs.createReadStream(__dirname+"/readFile.txt",'utf-8');
  myReadStream.pipe(res);
});
// now that proxy is running
server.listen(1717, '127.0.0.1');
