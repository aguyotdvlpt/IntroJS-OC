var Film = {

	initFilm : function(nom, annee, realisateur) {
		this.nom = nom;
		this.annee = annee;
		this.realisateur = realisateur;
	},

	decrire: function() {
		var description = this.nom + " (" + this.annee + ") " + ", " + this.realisateur;
		return description;
	}
};

var film1 = Object.create (Film);
film1.initFilm("Le loup de Wall Stret", 2013, "Martin Scorsese");

var film2 = Object.create(Film);
film2.initFilm("Vice-Versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.initFilm("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var films = [film1, film2, film3];

films.forEach(function (film) {
	console.log(film.decrire());
});