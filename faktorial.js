var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
var b=1;
var y=0;
var a=1;
while(b<n){
	b=b+1;
	a*=b;
	
}
console.log("a=" +a+"");
	//d=a*b;
	//console.log("d=" +d+"");
