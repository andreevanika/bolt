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
var n1=factorial(n);
var m1=factorial(m);
var d=factorial(n-m);
var a;
a=n1/(m1*d);
process.stdout.write("n =  " + n+"");
process.stdout.write("m =  " + m+"");
process.stdout.write("d =  " + d+"");
process.stdout.write("a =  " + a+"");

