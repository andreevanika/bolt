var readline=require("readline-sync");
var n=readline.question("n:");
for (var j=n;j>2;j-=2){
  for(var m=(n-j)/2;m<(n-j);m++){
    process.stdout.write("-");
  }
    for (var i=j;i>1;i--){

        process.stdout.write("*");

    }process.stdout.write("*\n");
}
for (var j=0;j<n;j+=2){
  for(var m=1;m<(n-j)/2;m++){
    process.stdout.write("-");
  }
    for (var i=0;i<j;i++){
        process.stdout.write("*");
    } process.stdout.write("*\n");
}



