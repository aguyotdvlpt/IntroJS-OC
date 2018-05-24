/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var proposition = (prompt("Veuillez entrer un nombre entre 1 et 100"));
var tour = 1


while (tour <= 10)  {

	
	if (proposition == solution) {  //La réponse est bonne

		alert("FELICITATIONS !!! Vous avez gagné !!!" + 
					"\n Vous avez trouvé en " + tour + "essai(s)");
		break;						// fin de la boucle
	
}	
 
	if (proposition < solution) {	// La réponse est supérieure

		console.log("Le chiffre mystère est supérieur à " + proposition +
					"\n Il vous reste " + (6 - tour) + "essai(s)" );
		tour++;
		proposition = (prompt("Veuillez entrer un nombre entre 1 et 100"));
	}		

	if (proposition > solution) {	// La réponse est inférieureè

		console.log("Le chiffre mystère est inférieur à " + proposition +
					"\n Il vous reste " + (6 - tour) + "essai(s)") ;
		tour++;
		proposition = (prompt("Veuillez entrer un nombre entre 1 et 100"));
	}	

}

	
