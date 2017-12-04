var mySound;
var myTimer;

// function preload(){
// 	mySound = loadSound('sounds/drum.wav');
// }

// function setup() {
// 	myTimer = setInterval(soundPlayer, 5000);	
// }


// function soundPlayer(){
// 	mySound.play();
// }

function setup() {
	loadSound('sounds/drum.wav', ready);
}

function ready(sound) {
	mySound = sound;
	mySound.play();

}

