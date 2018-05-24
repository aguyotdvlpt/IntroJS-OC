// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
	var message = "Bonjour, " + prenom + " " + nom + " !";
	return message
}

var prenom = prompt(" Veuillez saisir votre prénom");
var nom = prompt(" Veuillez saisir votre nom");

console.log(direBonjour(prenom, nom));