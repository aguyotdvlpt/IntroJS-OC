// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
	initCB: function (nom, solde) {
	this.nom = nom;
	this.solde = solde;
},

	
	debiter: function (montant) {
		this.solde = this.solde - this.montant;
	},

	crediter: function (montant) {
		this.solde = this.solde + this.montant;
	},

	decrire: function () {
		var description = "Le compte courant de " + this.nom + " a un solde de " + this.solde + " euros."
		return description;
		},
};

var CompteEpargne = {
	initCE: function (nom, solde, interet) {
		this.nom = nom;
		this.solde = solde;
		this.interet = interet;
	},

	
	debiter: function (montant) {
		this.solde = this.solde - this.montant;
	},

	crediter: function (montant) {
		this.solde = this.solde + this.montant;
	},

	ajouterInterets: function () {
		var interet = this.interet * this.solde;
		this.solde += interet;
	},

	decrire: function () {
		var description = this.nom + " ,solde : " + this.solde + " euros.";
		return description;
	},
};



var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());