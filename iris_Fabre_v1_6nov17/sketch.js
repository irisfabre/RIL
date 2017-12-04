var img1;
var img2;
var maListe;
var mysound1;
var mysound2;
var compteur = 0;
var sizze = 60;

function preload(){
	
	mysound1 = loadSound('sounds/ouch.wav');
	mysound2 = loadSound('sounds/pleur.mp3');

	img1 = loadImage("images/oignons.jpg");	
	img2 = loadImage("images/couteau.gif");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	maListe = "cut";

    textFont('Noto Sans');
	textSize(sizze);
	textAlign(CENTER, CENTER);

	fill(random(255),random(255), random(255));
}
	
 

function mousePressed() {
	if (compteur >= 4 ) {
		maListe = "harder";
	}

	if (compteur >= 9) {
		background(255);
		img1 = loadImage("images/oignons-coupes.jpg");
		maListe = "bingo";
		sizze = 60;
		mysound2.play();

	} else {
		sizze = sizze * 1.3;
		mysound1.play();
	}

	compteur = compteur +1;
	textSize(sizze);
	fill(random(255),random(255), random(255));

}


function draw() {
	
	background(255);
	if(img1) {
		image(img1, width/2, height/2);
	}

	text(maListe,random(width), random(height));

	image(img2, mouseX, mouseY);
}




