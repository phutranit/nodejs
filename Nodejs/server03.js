var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs');
var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
	// set response header
	res.writeHead(200, { 'Content-Type': 'text/html' }); 
	fs.createReadStream(__dirname+"/views/index.html").pipe(res);
});

server.listen(8000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
