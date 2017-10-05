var http = require('http');
var fs = require('fs');
var express = require('express')

var server = http.createServer((req, res) => {
  var url = req.url;
  if(url === "/home"){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var objPerson = {
      fullname:"Tran Phu",
      age     : 20
    };
    res.end(JSON.stringify(objPerson));
  }

});
// now that proxy is running
server.listen(1717, '127.0.0.1');
