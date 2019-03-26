var readline=require("readline-sync");
var n = readline.question(" n :");
for ( var i=0; i<n; i++){
 for(var j=1;j<n;j++){
   process.stdout.write( "*")
} process.stdout.write("*\n")
}
////for(var i=n;i>0;i--){
////    process.stdout.write("*\n");
