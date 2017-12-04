function setup(){
	createCanvas(windowWidth, windowHeight);

	for (var i=0; i<100; i+10) { //valeur initilale de i = 0, tant que i est inferieur à 100, augmenter i de 1
		print(i);

		rect(i, height/2, 10, 10);
	}
}