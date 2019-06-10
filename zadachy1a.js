var readline = require("readline-sync");
var s= parseInt(readline.question("s = : "));
var ss = s;
var x=1;
var m;
var b=0;
//var d=1;
while(s!=0){
	s=Math.floor(s/10);
	x=x*10;
	b=b+1;
}
//console.log(x);
//var s = parseInt(readline.question("s = : "));
m=(x*10)+ss*10+1;
	
console.log("итог="+m+"");

