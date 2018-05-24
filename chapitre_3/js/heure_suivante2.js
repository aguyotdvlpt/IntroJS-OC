var h = Number(prompt("Saisir le nombre des heures :"));
var min = Number(prompt("Saisir le nombre des minutes :"));
var sec = Number(prompt("Saisir le nombre des secondes :"));

if ((sec <=59) && (min <=59) && (h <24) && (sec >=0) && (min >=0) && (h >=0)) {
	sec++;

	if (sec===60) {
	min++;
	sec=0;

		if (min===60) {
		h++;
		min=0;

			if (h===24) {
				h=0;
			}

		}
	}
	console.log("Dans une seconde, il sera " + h + "h" + min + "mn" + sec + "s")
} else {
	console.log("Heure Incorrecte !")
}
