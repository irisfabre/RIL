var OH, monTexte1, monTexte2, monTexte3, monTexte4, monTexte5;

function preload(){
 OH = loadImage('image/Untitled-3.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    monTexte1 = 'Toute la vie des sociétés' ;
    monTexte2 = 'dans lesquelles règnent les conditions modernes de production';
    monTexte3 = 's’annonce comme une immense accumulation de spectacles.'; 
    monTexte4 = 'Tout ce qui était directement vécu';
    monTexte5 = 's’est éloigné dans une représentation.';
}
  
function rotation1(){

if (frameCount % 10 == 0) {
    push();
    translate(width/2, height/2);
    rotate(radians(frameCount * 2  % 360));
    image (OH, 0, 0);
    pop();
  }
}

function draw(){

    if (millis() > 1000) {

    image (OH, mouseX, mouseY);
}
    rotation1();

}

function keyTyped() {

    if (key === "d") {
    background (255);
    textSize(25);
    textAlign(CENTER);
    text(monTexte1, width/2, 20);
}

if (key === "e") {
    background (255);
    textSize(25);
    textAlign(CENTER);
    text(monTexte2, width/2, 50);
}

if (key === "b") {
    background (255);
    textSize(25);
    textAlign(CENTER);
    text(monTexte3, width/2, 75);
}

if (key === "o") {
    background (255);
    textSize(25);
    textAlign(CENTER);
    text(monTexte3, width/2, 100);
}

if (key === "r") {
    background (255);
    textSize(25);
    textAlign(CENTER);
    text(monTexte4, width/2, 125);
}

if (key === "g") {
    background (255);
    textSize(25);
    textAlign(CENTER);
    text(monTexte5, width/2, 150);
}



if (key === "a") {
    background (255);
}
}