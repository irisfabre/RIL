var yes = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(random(255), random(255), random(255));
    //frameRate(5);
}

    function draw() {
	//background(150);
    if (yes === true) {
    if (millis() > 1000){ /* condition qui va faire demarrer l'action au bout de 5000 milisecondes */ 

    fill(random(255),random(255), random(255));

	ellipse(mouseX, mouseY, 40, 60);

    }
    }}  /* genere des elipses de formes aléatoires (random) en suivant le mouvement de la souris*/

    function mousePressed() {
        //background(random(255), random(255), random(255));
        yes = !yes;
    }  /* réinitalise le fond gris à chaque clic  */






