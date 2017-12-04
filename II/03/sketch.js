var nombreEntier; /*création d'une variable souhaitée hors langague p5 */ 


function setup() {
	createCanvas(windowWidth, windowHeight);

	background(190, 200, 240);

	nombreEntier = 0; /*definition de cette variable*/ 

}
function draw() {

	background(255, 0, 0);

	nombreEntier = nombreEntier + random (0, 15);

	print(nombreEntier);

	rectMode(CENTER);

	rect(nombreEntier, 100, 100 - nombreEntier, 100);


}
