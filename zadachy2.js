var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
 console.log("начальное значение = " +n+"");
 var x=10;
 var n3;
 var b=0 ;
 var n2=0;
 var m=0;
 var n1=n%10;
	console.log("первое число=" +n1+"");
 var d=(n-n1)/10;//Math.floor(n/10);
while(n!=0){
	m=Math.pow(x, b)
	 n2=d/m;
	console.log("z=" +n2+"");
	n=Math.floor(n2/10);
	b=b+1;
	console.log("второе число="+n+"");
	if(n3!=1){
	n3=n2%m;
	n3=n3*m*10;
	n4=Math.floor(n3/10);
	console.log("треть число="+n4+"");
	}else{
	}
k=n1*Math.pow(x, b)*x+n4*x+n;
 console.log("конечное значение = " +k+"");
}