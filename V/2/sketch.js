
var blobarray = [];

function setup(){
	createCanvas(windowWidth, windowHeight);

for(var i=0; i < 2; i++) {
	blobarray[i] = new Blob(0);
}
}

function draw(){
	background(50);

	

for(var i=0; i < 100; i++) {
	blobarray[i].move();
	blobarray[i].display();
}
}