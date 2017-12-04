var img;

//function preload(){
//	img = loadImage("imgs/monkey.jpg");
//}
function setup() {
	createCanvas(640, 900);

	background(255, 0, 0);

	print("hello Mr");

	img = loadImage("imgs/malheur.png");
}
 

function draw() {
	tint(0, 255, 0);
	image(img, 0, 0);
}
