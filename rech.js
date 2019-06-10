var readline=require("readline-sync");
var x = parseInt(readline.question("x = : "));
var y=1;
while(y<x){
	y=y*3;
}
if(y==x){
	console.log("da");
}else{
	console.log("net");
}