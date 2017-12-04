function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);
	// frameRate(5);
}

    //function draw() {
    //	background(150);
    //	line(width/2, height/2, mouseX, mouseY);

    //}   /* permet de tracer une ligne depuis le centre qui evolue en meme temps que notre souris bouge*/

function draw() {
    	background(150);
    	line(width/2, height/2, random(width), random(height));

    	print(random(100));
    }   /* permet de generer une ligne aléatoirement grace à la fonction "random" 




