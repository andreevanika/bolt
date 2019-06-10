var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
var m = parseInt(readline.question("m = : "));
var b=1;
var y=0;
var c;
var k=1;
var a;
var c1=1;
while(n>y){
	y=y+1;
	b=y*b;
}
console.log("b =" + b +"");
y = 0;
while(m>y){
	y=y+1;
	k=y*k;
}
console.log("k =" + k +"");
y = 0;
c=n-m;
while(c>y){
	y=y+1;
	c1=c1*y;
}
console.log("c =" + c +" c1=" + c1 +"");
a=b/(k*c1);

console.log ("a =" + a +"");