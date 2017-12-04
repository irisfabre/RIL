var x;

function setup() {
	createCanvas(640, 900);

	background(190, 200, 240);

	x = 0;
	//print(x = 4); /* pose une question: "est-ce que x est egal à 4?" */
}

function draw(){
	background(255);

	x = x + 5;

	if (x < width/2) {
		rect(x, height/2, 100, 100);

	text("hello", x, height/2);
	}
}
 