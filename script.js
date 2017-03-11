function flash(object){
	var object = document.getElementById(object);
	if (object.classList.contains('flash')){
		object.classList.remove('flash');
	}
	else{
		object.classList.add('flash');
	}
}