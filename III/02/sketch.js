var monArray;

function setup() {
	createCanvas(windowWidth, windowHeight);

	monArray = ["pomme", "orange", "banane", "chien", "rouge"];

	print(monArray);

	print("lenght = " + monArray.length);

	print(monArray[0]); 

	print(monArray[4]); //le 4ème element de ma liste "monArray"

	print(monArray[100]); //le 1OOème element de ma liste "monArray"

	print(random(5));  //nombre flottant entre 0 et 5

	print(int(random(5)));  // nombre entier entre 0 et 4

	print(random(monArray)); //un element alléatoire de la liste "monArray"


}
