var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
	console.log(nombre + " est positif");
} else { //nombre <= 0
	if (nombre < 0) {
		console.log(nombre + " est négatif");
	} else { // nombre === 0
	console.log(nombre + " est nul");
	}
}

if ((nombre >=0) && (nombre <=100)) {
	console.log(nombre + " est compris entre 0 et 100")
} 

if ((nombre < 0) || (nombre >100)) {
	console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}

if (!(nombre > 100)) {
	console.log(nombre + " est inférieur à 100")
}