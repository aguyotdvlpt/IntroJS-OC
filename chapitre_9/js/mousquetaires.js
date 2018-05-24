console.log("Voici les trois mousquetaires :");

var mousquetaires = ["Athos", "Porthos", "Aramis"];

for (var i = 0; i < mousquetaires.length; i++) {
	console.log(mousquetaires[i]);
}

mousquetaires.push("d'Artagnan");

mousquetaires.forEach(function (mousquetaire) {
	console.log(mousquetaire);
});