var mot = prompt("Entrez un mot ou entrez stop pour arrêter");
var mots = [];


while (mot !== "stop") {

	mots.push(mot);
	mot = prompt("Entrez un mot ou entrez stop pour arreter");

}

if (mot === "stop")

{
	mots.forEach(function (mot) {
	
	console.log(mot);

	})

}