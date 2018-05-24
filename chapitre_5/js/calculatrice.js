function calculer(a, symbole, b) {

var resultat;

switch (symbole) {

case "+" :
	resultat = a + b;
	break;

case "-" :
	resultat = a - b;
	break;

case "*" :
	resultat = a * b;
	break;

case "/" :
	resultat = a / b;
	break;
}

return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity

