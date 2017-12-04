function setup() {
createCanvas(windowWidth, windowHeight);
myTimer = setInterval(myfunction3, 100); //horloge basée sur des dixiemes de sec
myTimer2 = setTimeout(myfunction4, 2000);
// myfunction1(); //va appeler une nouvelle fonction "myfuction"
// myfunction2();
// myfunction3("it works", 100);

// }

// function myfunction1() {
// 	print("hello");
// }

// function myfunction2 () {
// 	rect(300, 300, 200, 200);
// }

// function myfunction3 (var1, var2) {
// 	print("mon texte = " +var1 + var2);
 }


function myfunction3(x, y) {
	fill(random(256), random(256), random(256));
	rect(random(width), random(height), 20,20);
}

function myfunction4() {
	text('setTimeout was called', 400, 400); 
}

function mousePressed(){
	clearInterval(myTimer); //permet d'arreter le temps 
}

//setTimeout(myfunction3, 2000);
//setInterval(myfuction3, 2000);