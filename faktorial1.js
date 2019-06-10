var readline=require("readline-sync");
var n = parseInt(readline.question("n = : "));
var y=1;
for(var i=1;i<=n;i++){
	y=y*i;
}
	process.stdout.write("\ny =  " + y+"");
	

