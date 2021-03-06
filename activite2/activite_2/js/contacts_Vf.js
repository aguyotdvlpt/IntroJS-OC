/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Création du Prototype

var Contact = {

	init: function(nom, prenom) {						// Initialisation du contact
		this.nom = nom;
		this.prenom = prenom;
	},

	decrire: function() {								// Description du contact
		var description = "Nom: " + this.nom + ", Prénom: " + this.prenom;
		return description
	},
};

// Fin de création du prototype

// Création de la fonction affichage du menu

	function affMenu() {
		console.log("1 : Lister les contacts");
		console.log("2 : Ajouter un contact");
		console.log("0 : Quitter");
	}

	
// Création des 2 premiers contacts

var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

// Création du tableau Répertoire

var repertoire = [];

// Intégration des 2 premiers contacts

	repertoire.push(contact1);
	repertoire.push(contact2);

// Page de démarrage 


	console.log("Bienvenue dans le gestionnaire de contact");
	affMenu();
	var choix = prompt("Choisissez une option");


while (choix == 1 || choix == 2) {

// Affichage de la console suite CHOIX 1

	if (choix == 1) { 

		console.log("\n" + "Voici la liste des contacts : ");

		repertoire.forEach(function (contact) {
		console.log(contact.decrire());
})


	console.log("\n");
	affMenu();

	var choix = prompt("Choisissez une option");
}

// Affichage de la console suite CHOIX 2

	else if (choix == 2) {

	var i = repertoire.length
	var contacti = "contact"+ i
	var contacti = Object.create(Contact)

		contacti.init(prompt("Saisir le nom du nouveau contact"), 
				  	  prompt("Saisir le prénom du nouveau contact"));

		repertoire.push(contacti); // Ajout du nouveau contact au tableau

	console.log("\n" + "Le nouveau contact a été ajouté");
	console.log("\n");
	affMenu();
	var choix = prompt("Choisissez une option");
}


}
// Affichage de la console suite CHOIX 0
	if (choix == 0) {
		console.log("\n" + "Au Revoir");
}


