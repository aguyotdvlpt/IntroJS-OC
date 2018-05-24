var reponse = (prompt(" Voulez-vous jouer au ni oui ni non ?"));

while (reponse !== "oui" && reponse !== "non") {

	reponse = prompt(" Voulez-vous jouer au ni oui ni non ?");

}

	if (reponse === "oui" || reponse === "non") {
		
		console.log("Bouh ! T'as perdu gros naze");
}
