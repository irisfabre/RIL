var mySound;
var counter = -1;
var soundList = ['drum.wav', 'bit.wav']; 


function mousePressed() {
	 counter = counter + 1;
	 if(counter >= soundList.length) {
 		counter = 0;

	}

 	loadSound('sounds/' + soundList[counter], ready); //ready permet de definir quand le chargement est pret 

 	 }

 function ready(sound){
 	mySound = sound; 

 
    mySound.setVolume(0.5);
 	mySound.play();
 }

function draw() {
	rect(500, 500, 200, 200);
}