var readline = require("readline-sync");
var m=0;
var s;
while(m<=200){
	s = (10*(m+10))+1;
	m = m+1;
	console.log("результат ="+s+".");	
	if (s>=2000) {
		s=s-1000;
		console.log("итог="+s+"");
	}else if(s<1000){
		s=s+1000;
		console.log("итог="+s+"");
		
	}
}

