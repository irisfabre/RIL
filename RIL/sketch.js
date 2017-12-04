var d;
var temp;

function setup(){
	createCanvas(windowWidth, windowHeight);

	monArray = ["Rest", "In", "Life"];
 

	//var d = new Date();
    
    textSize(100);
	textAlign(CENTER, CENTER);
	fill(random(255),random(255), random(255));	
	textFont('Varela Round');


	//text_1 = "Rest";
    //text_2 = "In";
    //text_3 = "Life";

}

function Background(){

	noStroke();
	fill(random(255),random(255), random(255));	 
    rect(0, 0, windowWidth, windowHeight/3);
    fill(random(255),random(255), random(255));
    rect(0, windowHeight/3, windowWidth, windowHeight/3);
    fill(random(255),random(255), random(255));
    rect(0, windowHeight/3*2, windowWidth, windowHeight/3); 

}



function draw(){
	
	function Background;

	text(monArray[0], width/2, height/3/2);
	
	text(monArray[1], width/2, height/2);
	
	text(monArray[2], width/2, height/6*5);

	//text(d.toDateString(), 100, 100);
}

function mousePressed() {

	function background;

	//temp = random(monArray);
	
	//will temp === 
	//text(random(monArray), width/2, height/3/2);
	
	//text(random(monArray), width/2, height/2);
	
	//text(random(monArray), width/2, height/6*5);

	//text(d.toDateString(), 100, 100);

}

