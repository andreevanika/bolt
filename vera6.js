var readline=require("readline-sync");
var n = readline.question(" n :");
for ( var i=0; i<n; i++){
    for(var j=0;j<n;j++){
        if(j<=(n-i-1) && (j>=i)){
            process.stdout.write("*");
        }else{
            process.stdout.write(".");
        }
    }
    process.stdout.write("\n");
}