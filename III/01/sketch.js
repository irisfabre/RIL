var monTexte, toggle;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(190, 200, 200);

	monTexte = "à bientôt ";

	textFont('Roboto Mono');

	//textSize(50)

	fill('#bf85d6');
	stroke(222, 100, 100);
	strokeWeight(5);

	toggle = false;


}


	function draw () {

		background('#30f627');

		textSize(mouseX/10);

		text(monTexte, width/2, height/2);

	}

	function mousePressed() {

		toggle = !toggle;

		if (toggle === true) {
			textFont('Roboto Mono');
			fill('#d8f05a');
		}
		else {
			textFont ('Titillium Web');
			fill('#bf85d6');
		}}






	

