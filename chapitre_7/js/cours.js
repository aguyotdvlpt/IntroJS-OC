//Création d'un objet
var stylo = {
	type: "bille",
	couleur: "bleu",
	marque: "Bic",
};

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " " + "écrit en " + stylo.couleur);

stylo.couleur = "rouge";	// Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " " + "écrit en " + stylo.couleur);

stylo.prix = 2.5 // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");