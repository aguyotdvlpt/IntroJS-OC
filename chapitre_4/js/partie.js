var i1 = Number(prompt("Veuillez saisir le premier nombre"));
for (var i=i1; i<=(i1 + 10); i++){
	if (i % 2 === 0) {
		console.log(i + " est pair");
	} else {
		console.log(i + " est impair");
	}
}