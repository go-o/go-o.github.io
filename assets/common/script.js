window.addEventListener('scroll', checkNavBar);

///

function checkNavBar(){
	var scrollTop = Number(document.body.scrollTop);
	if((scrollTop) < 75){
		document.getElementById("barContainer").style.backgroundColor = "transparent";
		document.getElementById("barContainer").style.top = -10 + "px";
	}
	else{
		document.getElementById("barContainer").style.backgroundColor = "white";
		document.getElementById("barContainer").style.top = 0 + "px";
	}
}

function exclaim(exclamation, number){
	var T = document.getElementById(exclamation).style.top;
	T = T.substring(0, T.length-1);
	T = Number(T);
	T = number;
	document.getElementById(exclamation).style.top = T + "%";
}