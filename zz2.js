var readline=require("readline-sync");
function factorial(x){
var c=1;
	for(var i=1;i<=x;i++){
	c=c*i;
	}	
return c;
}
var n = parseInt(readline.question("n = : "));
var m = parseInt(readline.question("m = : "));
a=(factorial(n))/(factorial(m)*factorial(n-m));
process.stdout.write("a =  " + a+"");