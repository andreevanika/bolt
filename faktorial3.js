//n!/m!*(n-m)!
var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
var m = parseInt(readline.question("m = : "));
var x=1;
var c=1;
var d=1;
var a;
for(var i=1;i<=n;i++){
	x=x*i;
}
for(var i=1;i<=m;i++){
	c=c*i;
}
for(var i=1;i<=(n-m);i++){
	d=d*i;
}
a=x/(c*d);

	process.stdout.write("a =  " + a+"");