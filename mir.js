var readline = require('readline-sync')

var a=readline.question("Enter, a:");
var b=readline.question("Enter, b:");
var c;
console.log("a = " + a + " b = " + b + "!");
console.log("zamena");
c=a
a=b
b=c
console.log("znachenie a = " + a + " b = " + b +"!") 