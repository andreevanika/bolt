var readline=require("readline-sync");
var n=readline.question("n:");
for (var i=n; i>0;i--){
    for (var j=i; j>0;j--){
        process.stdout.write("*");

    }process.stdout.write("*\n")
}
for (var j=0;j<=n;j++){
    for (var i=0;i<j;i++){
        process.stdout.write("*");
    } process.stdout.write("*\n");
}
