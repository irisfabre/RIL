function setup() {
  createCanvas(640, 480);

  background(255);

  stroke(255, 0, 0);
  fill(0, 255, 0);
  ellipse(100, 0, 50, 50);

  stroke(0, 0, 255);
  strokeWeight(5);
  noFill();
  ellipse(300, 100, 50, 50);
}