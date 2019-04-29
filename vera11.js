var readline = require("readline-sync"); 
var random=parseInt(Math.floor(Math.random()*(100-1+1)+1));
console.log(+random+"");
var min= 1; 
var x = parseInt(readline.question("x = : ")); 
while (x!=random){
    if(min>4){
        break;
    }
    if(x>random){
        console.log("число меньше загаданного");
    }else if(x<random){
        console.log("больше загаданного числа");
    }
    x = parseInt(readline.question("x = : "));
    min=min+1;
}
console.log("Результаты игры:\nx= " + random + "\nпопыток= " + min+ "");
if(min<=4){
    console.log("выиграл " );
}else{
    console.log("n\проиграл" );
}
