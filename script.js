

function clock() {
	var now = new Date(); 
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	var dayArr = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var day = now.getDay();
	
	if(h <= 9) h = '0'+h;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;
	

	
	document.getElementById("hours").innerHTML = h;
	document.getElementById("minutes").innerHTML = m; 
	document.getElementById("seconds").innerHTML = s;  document.getElementById("day").innerHTML = dayArr[day];

	
	
	setTimeout(clock, 1000);
}


clock();