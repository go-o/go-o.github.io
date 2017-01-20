window.addEventListener('scroll', checkNavBar);

///

function checkNavBar(){
	var scrollTop = Number(document.body.scrollTop);
	if((scrollTop) < 75){
		document.getElementById("barContainer").style.backgroundColor = "transparent";
	}
	else{
		document.getElementById("barContainer").style.backgroundColor = "white";
	}
}

function exclaim(exclamation, number){
	var T = document.getElementById(exclamation).style.top;
	T = T.substring(0, T.length-1);
	T = Number(T);
	T = number;
	document.getElementById(exclamation).style.top = T + "%";
}

function flash(object){
	var object = document.getElementById(object);
	if (object.classList.contains('flash')){
		object.classList.remove('flash');
	}
	else{
		object.classList.add('flash');
	}
}