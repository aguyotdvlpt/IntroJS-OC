
function compterNbVoyelles(mot) {
	var nbVoyelles = 0;
	for (var i = 0; i < mot.length; i++) {
		var lettre = mot[i].toLowerCase();
		if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
			nbVoyelles++;
		}
	}
		return nbVoyelles;
}


function inverser(mot) {
		var motALEnvers = "";
		for (var i = (longueurMot - 1); i >= 0; i--) {
		motALEnvers = motALEnvers + mot[i];
		}
	return motALEnvers;
}

function convertirEnLeetSpeek(mot) {
		var motLeet = "";
		for (var i = 0; i < mot.length; i++) {
		motLeet = motLeet + trouverLettreLeet(mot[i]);
		}
		return motLeet;
}

function trouverLettreLeet(lettre) {

		var lettreLeet = lettre;
		switch (lettre.toLowerCase()) {
			case "a" :
				lettreLeet = "4";
				break;
			case "b" :
				lettreLeet = "8";
				break;
			case "e":
				lettreLeet = "3";
				break;
			case "l" :
				lettreLeet = "1";
			case "o":
       			lettreLeet = "0";
        		break;
    		case "s":
        		lettreLeet = "5";
        		break;
    		case "t":
        		lettreLeet = "7";
        		break; 
		}
	return lettreLeet;
}

var mot = prompt("Veuillez saisir le mot à analyser : ")
var longueurMot = mot.length;
var motMajuscule = mot.toUpperCase();
var motMinuscule = mot.toLowerCase();


console.log(" Le mot " + mot + " contient " + longueurMot + " caractères");
console.log("Il sécrit en majucules " + motMajuscule);
console.log("Il s'écrit en minuscule " + motMinuscule);	
console.log("Il contient " + compterNbVoyelles(mot) + " voyelles " + (longueurMot - compterNbVoyelles(mot)) + " consonnes");
console.log(mot[7] + mot[6] + mot[5] + mot[4] + mot[3] + mot[2] + mot[1] + mot[0]);
console.log("Il s'écrit à l'envers " + inverser(mot));

if(inverser(mot).toLowerCase() === mot.toLowerCase()) {
	console.log("Ce mot est un palindrome");
} else {
	console.log("Ce mot n'est pas un palindrome");
}

console.log("Il s'écrit en leetspeak " + convertirEnLeetSpeek(mot));