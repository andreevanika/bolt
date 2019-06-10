var readline = require("readline-sync"); 
var random;
var m ; 
//var x = parseInt(readline.question("x = : ")); 
	
do{
	random=parseInt(Math.floor(Math.random()*(319-300+1)+300));
	m=random%19;
	console.log("рандомное число= "+random+"");	
	console.log("m = " +m+ ".");
	}while(m!=0);

