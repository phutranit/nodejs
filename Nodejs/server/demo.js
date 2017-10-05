function Persion(name,password){
	this.name = name;
	this.password = password;
}

Persion.prototype.getName = function(){
	return this.name;
}

Persion.prototype.getPassword = function(){
	return this.password;
}

Persion.prototype.getLevel = function(){
	return this.level;
}

Persion.prototype.level = "admin";

function User(name,password){
	this.name = name;
	this.password = password;
}

User.prototype = new Persion();

var persion = new Persion("Cu em",123456);
var user = new User("Teo",12);

console.log(user.getName());
console.log(persion.getName());
console.log(persion.getLevel());
console.log(user.getLevel());
console.log(user.getPassword());




