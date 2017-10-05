var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine','ejs');

app.get('/home', function (req, res) {
  //res.writeHead(200, { 'Content-Type': 'text/html' });
  //res.sendFile(__dirname+"/index.html")
  res.send("Okkkkkkkkkkkkkkk");
});

app.get('/index', function (req, res) {
  //res.writeHead(200, { 'Content-Type': 'text/html' });
  //res.sendFile(__dirname+"/index.html")
  res.sendFile(__dirname+"/index.html");
});
// now that proxy is running
app.listen(1717, '127.0.0.1');
