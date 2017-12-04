function setup() {
	createCanvas(windowWidth, windowHeight);

	background(190, 200, 240);

	print(width, height);
}

function draw() {
	print("mouseX, mouseY = " + mouseX + "," + mouseY);
}

function keyTyped(){
	print(key);
	print("the keyCode = " + keyCode);
}
