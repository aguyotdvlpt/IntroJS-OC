var valeurs = [11, 3, 7, 2, 9, 10];

function somme() {
	var resultat = 0;
	for(var i = 0; i < valeurs.length; i++) {
		resultat = resultat + valeurs[i];
	}
	return resultat;
}

console.log(" La somme des éléments vaut " + somme());