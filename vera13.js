var readline = require("readline-sync")
var hod = 0;
var random1;//число забираемых компом палочек
var random2=parseInt(Math.floor(Math.random()*(15-5+1)+5));//общее число палочек
console.log(+random2+"");
while(random2>0){
	if(hod==0){
		hod=hod+1
		var x = parseInt(readline.question("x = : "));
		console.log("я ="+x+"")
		random2=random2-x;
		console.log("остаток1 =" +random2+"")
	}
	else {
		hod=hod-1
		random1=parseInt(Math.floor(Math.random()*(2-1+1)+1));
		console.log("комп=" +random1+"")
		random2=random2-random1
		console.log("остаток2 =" +random2+"")
	}
}
if(hod==0){
	
	console.log(" последним ходит компьютер");
}else{
	console.log(" последним ходит человек");
	}