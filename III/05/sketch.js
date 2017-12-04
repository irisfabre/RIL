var img, imageList; 

function setup(){
	createCanvas(windowWidth, windiwHeight);

	imageList = ["img1.jpg","img2.jpg","img3."];
}

function draw(){
	if (img !== null){
	image(img, width/2, height/2);
	}
}

function mousePressed(){
	image(img, width/2, height/2)
}