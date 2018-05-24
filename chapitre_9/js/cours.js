var films = ["Le loup de Wall Street", "Vice-versa", "Babysitting"];

// Un tableau se note entre crochets []

// Longueur d'un tableau
console.log(films.length); // affiche 3

// Afficher un élément du tableau

console.log("\n")
console.log(films[0]);
console.log(films[1]);
console.log(films[2]);

console.log ("\n");

var films = ["Le loup de Wall Street", "Vice-versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
	console.log(films[i]);
}

console.log ("\n");

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.forEach(function (film) {
    console.log(film);
});

console.log ("\n");

films.push("Les Bronzés");
console.log(films[3]);