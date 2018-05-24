var h = Number(prompt("Saisir le nombre des heures :"));
var min = Number(prompt("Saisir le nombre des minutes :"));
var sec = Number(prompt("Saisir le nombre des secondes :"));

if ((sec <59) && (min <59) && (h <24) && (sec >=0) && (min >=0) && (h >=0)) {
	console.log("Dans une seconde il sera " + h + " h " + min + " mn " + (sec + 1) + "s");


} else if (sec ===59 && min !==59) {
	console.log("Dans une seconde il sera " + h + "h " + (min+1) + " mn" + " 0 sec");

} else if ((sec ===59) && (min ===59) && (h !==23))  {
	console.log("Dans une seconde il sera " + (h + 1) + " h " + " 0 mn " + " 0 sec");

} else if ((sec ===59) && (min ===59) && (h === 23)) {
	console.log("Dans une seconde il sera 0 h 0 min 0s (minuit)")

} else {
	console.log("Merci de rentrer une valeur concordante");
}
