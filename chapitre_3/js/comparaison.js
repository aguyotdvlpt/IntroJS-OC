var nb1 = Number(prompt("Entrez un premier nombre :"));
var nb2 = Number(prompt("Entrez un second nombre :"));

if (nb1 > nb2) {
	console.log(nb1 + " est supérieur à " + nb2);
} else {
	if (nb1 < nb2) {
		console.log(nb1 + " est inférieur à " + nb2);
	} else {
		console.log(nb1 + " est égal à " + nb2);
	}
}
