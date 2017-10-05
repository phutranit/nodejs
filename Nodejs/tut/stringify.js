var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var objPerson = {
    fullname:"Tran Phu",
    age     : 20
  };
  res.end(JSON.stringify(objPerson));
});
// now that proxy is running
server.listen(1717, '127.0.0.1');
