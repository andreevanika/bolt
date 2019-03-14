var readline=require("readline-sync");
var a= parseInt(readline.question("summa, a: "));
var b= parseInt(readline.question("summa, b: "));

console.log(" a = " + a + " b = " + b + "!");
console.log("itog");
a = a + b
b = a - b
a = a - b
console.log("znachenie a = " + a + " b = " + b + "!")

