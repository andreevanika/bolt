var readline = require("readline-sync");
var s = parseInt(readline.question("s = : "));
var x=1;
var m;
var b=0;
var d =s;
while(s!=0){
	s=Math.floor(s/10);
	b=b+1;
	console.log("s="+s+"\nb="+b);
}