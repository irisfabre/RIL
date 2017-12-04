///à partir d'un texte, generer une liste de phrases qui vont s'afficher les unes à la suite des autres à chaque fois que l'on clique avec la souris. 
// texte centré, rouge 



var maListe, current, counter; //creation de trois variables

function setup() { 
	createCanvas(windowWidth, windowHeight);

	loadStrings('test.txt', myMethod); //telechargement du texte present dans le fichier "test"
	current = ""; //designer la variable comme vide
	
	textAlign(CENTER, CENTER); 
	textSize(50);
	fill(255, 0, 0);
}


function myMethod(result){ 

	maListe = result; //mettre "reslut" dans la variable "maListe"
	print(maListe); 
}

function draw() { 
	background(255);
	text(current, width/2, height/2); //ecrire texte au milieu de la page
}

function mousePressed() {
//	current = random(maListe);  // à chaque clique, apparition alléatoire des éléments de la variable "maListe"

	counter = counter + 1; //mettre dans la variable counter auquel on ajoute 1 

	if (counter > maListe.length) { // si counter est supperieur à une des lignes de maListe , alors counter revient à 0
		counter = 0;
	}

	current = maListe[counter];
}