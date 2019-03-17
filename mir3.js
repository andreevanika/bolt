var readline=(require("readline-sync"));
var a=parseInt(readline.question(" znachenie a:"));
var b=parseInt(readline.question("znachenie b:"));
var c=parseInt(readline.question("znachenie c:"));
console.log("данные a "+ a + " b " + b + " c " + c + "" );
a=2
b=3
c=4
console.log("присвоение a " + a + " b " + b + " c " + c + "");

a=a+b
b=a+c
c=a*b
console.log ("ответ a " + a + " b " + b + " c " + c + "");
a=a+c+b
b=a-b-c
c=a-b-c
a=a-b-c
console.log("вариант2 a " + a + " b " + b + " c " + c + "") 