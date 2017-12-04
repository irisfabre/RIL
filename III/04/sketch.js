var maListe, temp, last;

function setup() {
	createCanvas(windowWidth, windowHeight);

	maListe = ["one", "two", "three", "four", "five"];
	last = "";

}

function mousePressed() {
	temp = random(maListe);

	while (temp === last){
		temp = random(maListe);

	background(255);
	}

last = temp; 

print(temp);
}

function draw () {
	
    text(last, mouseX, mouseY);
    fill(random(255),random(255), random(255));

}

//function mousePressed() {
//	background(255);
//	text(last, mouseX, mouseY);
//}