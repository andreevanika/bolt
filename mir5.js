var readline=require("readline-sync");
var a = parseInt(readline.question(" a:"));
var b = parseInt(readline.question("b:"));
var c = parseInt(readline.question("c:"));
if (c<a){
    console.log(" условие c<a");

} else if (c>b){
    console.log("условие c>b")
} else {
    console.log("условие a<c<b")
}