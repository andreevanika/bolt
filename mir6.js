var readline=require("readline-sync");
var x1 =readline.question("znachenie x1:");
var x2=readline.question("znachenie x2:");
var y1=readline.question("znachenie y1:");
var y2=readline.question("znachenie y2:");
var x3=readline.question("tochka x3 : ");
var y3=readline.question("tochka y3 : ");
//console.log("координаты   x1 =" + x1 + " x2 = " + x2 + " y1= " + y1 + " y2 = " + y2 + "");
if(x1<=x3 && x3<=x2 && y1<=y3 && y3<=y2){
    console.log("попадает в прямоугольник");
} else {
    console.log(" не попадает");
}