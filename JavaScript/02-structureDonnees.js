let prenom = "Ana";

//La concaténation

let msg = "Bonjour ";

let bonjour = msg + prenom;

console.log(bonjour);

// L'interpolation

let message2 = `Bonjour ${prenom} !`;

console.log(message2);

let a = 8;
let b = 9;
let messageSum = `La somme de ${a} et ${b} est égale à ${a + b}`;

console.log(messageSum);

//Les objets

let personne = {
  nom: "Martin",
  age: 28,
  profession: "QA",
};

console.log(personne);
console.log(personne.age);
console.log(personne["age"]);

//Les tableaux

let fruits = ["pastèque", "goyave", "melon"];

console.log(fruits[2]);

fruits[2] = "abricot";
console.log(fruits[2]);
