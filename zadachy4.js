var readline=require("readline-sync");
var x = parseInt(readline.question("x = : "));
var n=0;
var k;
var x1;
var b=3;
while(x!=k){
	n=n+1;
	k=Math.pow(3, n);
	console.log("K=" + k +"");
	if(k>x){
		console.log("Число не является степенью числа 3.");
		break;
	}																						
}
if(k==x){
	console.log("Число является степенью числа 3.");
}
//console.log("X1=" + x1 +"");
	//if(x==k){
	
	//console.log("истина  " );
	//}else{
		//break;
	//console.log("ложь  " );
	//}



		