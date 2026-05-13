// Fonction

function direBonjour(nom) {
  console.log("Bonjour " + nom + " !");
}

direBonjour("Ana");

// Fonction avec expression de fonctions

const direBonsoir = function () {
  console.log("Bonsoir !");
};

direBonsoir();

// Fonction pour retourner une fonction

function addition(a, b) {
  return a * b;
}

let resultat = addition(2, 3);
console.log(resultat);
