var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
 console.log("начальное значение = " +n+"");
 var n3;
 var b=0 ;
 var n2=0;
 var k=n;
 var n1=n%10;
	console.log("первое число=" +n1+"");
	n=Math.floor(n/10);
	console.log("n=" +n+"");
while(k!=0){
	k=Math.floor(k/10);
	b=b+1;
}
console.log("b=" +b+"");
n2= n%Math.pow(10, b-2);
console.log("2чис=" +n2+"");
n3=Math.floor(n/Math.pow(10, b-2));
console.log("3чис=" +n3+"");
process.stdout.write(n1*Math.pow(10, b-1)+n2*10+n3+"");

