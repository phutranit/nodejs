function KhoaHoc(ten,gia){
	this.Ten = ten;
	this.Gia = gia;
}
KhoaHoc.prototype.display = function(){
	console.log("Khoa hoc "+this.Ten + "/// Gia : "+this.Gia);
}

var nodejs = new KhoaHoc("Node Js",1000000);
	nodejs.display();
	console("Ten Khoa hoc : "+nodejs.prototype.Ten);
	console("Gia Khoa hoc : "+nodejs.prototype.Gia);