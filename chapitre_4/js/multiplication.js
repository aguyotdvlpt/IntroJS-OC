var table = Number(prompt("Veuillez saisir un chiffre entre 2 et 9 :"));
var multiplicateur = 1
	

while (table < 2 || table > 9) {
	table = Number(prompt("Veuillez saisir un chiffre entre 2 et 9"));
}
	
if (table >= 2 && table <=9) {
	console.log("Voici la table de multiplication de " + table );
}

while (multiplicateur <= 10) {
	console.log(table + " x " + multiplicateur + " = " + (table * multiplicateur));
	multiplicateur++;
							}
