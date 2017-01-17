var counter = {
    value: 0
};

function moveDown(){
	++counter.value;
	var sections = document.getElementsByTagName("section");
	for (var i=0; i<sections.length; i++){
		var MT = sections[i].style.marginTop; //string
		MT = MT.substring(0, MT.length-1);
		MT = Number(MT);
		MT = MT - 100;
		sections[i].style.marginTop = MT + "%";
	}
	arrowStatus(counter.value);
}

function moveUp(){
	--counter.value;
	var sections = document.getElementsByTagName("section");
	for (var i=0; i<sections.length; i++){
		var MT = sections[i].style.marginTop; //string
		MT = MT.substring(0, MT.length-1);
		MT = Number(MT);
		MT = MT + 100;
		sections[i].style.marginTop = MT + "%";
	}
	arrowStatus(counter.value);
}

function arrowStatus(counter){
	switch(counter){
		case(0):
			{
				document.getElementById("upArrow").style.display = "none";
				document.getElementById("downArrow").style.display = "block";
				document.getElementById("echo").load();
				buttons[0].pause();
				buttons[1].pause();
				break;
			}
		case(1):
			{
				document.getElementById("upArrow").style.display = "block";
				document.getElementById("downArrow").style.display = "block";
				document.getElementById('unsavedInfo').load();
				buttons[2].pause();
				buttons[3].pause();
				play('echo');
				break;
			}
		case(2):
			{
				document.getElementById("upArrow").style.display = "block";
				document.getElementById("downArrow").style.display = "none";
				document.getElementById("echo").load();
				play('unsavedInfo');
				buttons[0].pause();
				buttons[1].pause();
				break;
			}
		
	}
}

function flip(id){
	document.getElementById(id).style.transform = "rotateY(" + 180 + "deg)";
}

function flipBack(id){
	document.getElementById(id).style.transform = "rotateY(" + 0 + "deg)";
}

function loadButtons(number){
	for (var i=0; i<buttons.length; i++){
		if (i == number){ //skip
		}
		else{
			buttons[i].pause();
		}
	}
}

function Button(number, song, color){
	this.number = number; 
	this.circle = document.getElementsByClassName('circle')[number];
	this.triangle = document.getElementsByClassName('playTriangle')[number];
	this.pauseLines = document.getElementsByClassName('pauseLines')[number];
	this.song = document.getElementById(song);
	this.color = color;
	this.status = false; //false --> paused
	this.shrink = function(){
		this.circle.classList.remove('circleEnlarged');
		this.triangle.classList.remove('triangleEnlarged');
		this.pauseLines.classList.remove('pauseEnlarged');
	};
	this.enlarge = function(){
		this.circle.classList.add('circleEnlarged');
		this.triangle.classList.add('triangleEnlarged');
		this.pauseLines.classList.add('pauseEnlarged');
	};
	this.play = function(){
		currentAudio.pause();
		currentAudio = this.song;
		this.song.play();
		this.pauseLines.style.display = "block";
		this.triangle.style.display = "none";
		this.circle.style.borderColor = this.color;
		this.triangle.style.color = this.color;
		this.pauseLines.style.color = this.color;
		this.status = true;
	};
	this.load = function(){
		this.song.load();
		this.pauseLines.style.display = "none";
		this.triangle.style.display = "block";
		this.circle.style.borderColor = "gray";
		this.triangle.style.color = "gray";
		this.pauseLines.style.color = "gray";
		this.status = false;
	};
	this.pause = function(){
		this.song.pause();
		this.pauseLines.style.display = "none";
		this.triangle.style.display = "block";
		this.circle.style.borderColor = "gray";
		this.triangle.style.color = "gray";
		this.pauseLines.style.color = "gray";
		this.status = false;
	};
}

function play(song){
	var song = document.getElementById(song);
	currentAudio = song;
	song.play();
}

function pause(song){
	var song = document.getElementById(song);
	song.pause();
}


