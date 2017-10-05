var person = {
	ho		:	"Trần",
	ten		:	"Phú",
	chaomung	: function(){
		console.log("Ho ten : "+this.ho + " "+ this.ten );
	}
}
person.chaomung();
console.log(person.ho);
console.log(person["ten"]);