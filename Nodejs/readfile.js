var fs =  require("fs");
var noidong = fs.readFileSync(__dirname+"/demo.txt");
var noidongbt = fs.readFileSync(__dirname+"/BT.pdf","utf-8");
//console.log(noidong);
console.log(noidongbt.toString());