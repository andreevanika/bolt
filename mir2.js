var readline=require("readline-sync");
var a =parseInt(readline.question("chislo, a:"));
var b = parseInt(readline.question("chislo, b:"));
var c = parseInt(readline.question("chislo, c:"));
console.log(" значение a " + a +" b " + b + " c " + c + "");
a=a+c
c=a-c
a=a-c
b=b*(a+c)
console.log(" выражение  a " + a + " b " + b + " c " + c + "" );
a=b+a
console.log("итог a " + a + " b " + b + "")



