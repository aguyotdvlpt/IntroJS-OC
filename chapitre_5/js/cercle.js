function perimetre(rayon) {
	var calcul = (2 * rayon * Math.PI);
	var resultat = "Le périmètre du cercle de rayon est de " + calcul;
	
return resultat;
}

function aire(rayon) {
	var calcul = (rayon * rayon * Math.PI);
	var resultat = "L'aire du cercle est de " + calcul;

return resultat;
}

var rayon = prompt("Entrez le rayon du cercle :");

console.log(perimetre(rayon));
console.log(aire(rayon));