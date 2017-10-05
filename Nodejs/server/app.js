var express = require('express'); 
var app = express();
var server = require("http").createServer(app) ;
server.listen(8000);

app.get("/",function(req,res){
	res.sendFile(__dirname+"/views/demo.html");
});

app.post("/",function(req,res){
	res.sendFile(__dirname+"/views/demo.html");
});

app.get('/about', function (req, res) {
  res.send('about')
});

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params.userId +"--"+req.params.bookId);
})

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
	res.send('Hello from B');
	console.log('CB1')
	next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

