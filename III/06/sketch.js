var myText;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(100);
	fill(255,0,0);
	textAlign(CENTER, CENTER);
	myText = "";
}

function keyTyped() {
	myText = myText + key;
}

function keyPressed() {
	if (keyCode === 13) {
		myText = "up";
	}
}

function draw() {
	background(255);
	text(myText, width/2, height/2);
}

function mousePressed() {
	background(255);
	myText = "";
}