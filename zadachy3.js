var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
var m = n;
var b=0 ;
var c;
//console.log(" значение = " +n+"");
while(n!=0){
	n=Math.floor(n/10);
	b=b+1;
}
c=m*Math.pow(10, b);
//console.log("чис=" +c+"");
process.stdout.write(c+m+"");
