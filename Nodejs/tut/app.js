var express = require('express');
var app = express();
app.set('view engine','ejs');
app.use('/asset',express.static("asset"));
app.get('/profile/:name', function (req, res) {
  var objProfile = {
      age : 21,
      cl  : 'Java'
  };
  res.render(__dirname+"/view/profile",{name:req.params.name,objPro:objProfile,langlike:['Java','PHP','Android']});
});

app.get('/demo1', function (req, res) {
  res.render(__dirname+"/view/demo1");
});

app.listen(1717, '127.0.0.1');
