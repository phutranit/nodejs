var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
 
// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use('/asset', express.static(__dirname+'/asset/css'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))



app.get('/profile/:name', function (req, res) {
  var objProfile = {
      age : 21,
      cl  : 'Java'
  };
  req.session.name = req.params.name;
  res.render(__dirname+"/view/profile",{name:req.params.name,objPro:objProfile,langlike:['Java','PHP','Android']});
});

app.get('/demo1', function (req, res) {
	
  if(req.session.name != null){
		res.redirect("/addCat");
	}else{
		console.log(__dirname);
		res.render(__dirname+"/view/demo1");
	}
});

app.get('/addCat', function (req, res) {
	console.log(req.query);
  res.render(__dirname+"/view/addCat",{que:req.query});
});

app.post('/addCat', urlencodedParser ,function (req, res) {
	console.log(  req.body);
	//res.render(__dirname+"/view/success",{body:req.body});
	res.redirect("/demo1");
});


app.listen(1717, '127.0.0.1');
