console.log("ABC".length);
console.log("Je suis une chaîne".length);

var mot = "Kangourou";
var longueurMot = mot.length;
console.log(longueurMot);

var motInitial = "Bora-Bora";
var motEnMinuscule = motInitial.toLowerCase();
console.log(motEnMinuscule);
var motEnMajuscule = motInitial.toUpperCase();
console.log(motEnMajuscule);

var chaine = "azerty";
console.log( chaine === "azerty");
console.log(chaine === "qwerty");
console.log(chaine === "Azerty");

var sport = "Tennis-ballon";
console.log(sport[0]);
console.log(sport.charAt(6));

var prenom = "Alexandre";
for (var i = 0; i < prenom.length; i++) {
	console.log(prenom[i]);
}