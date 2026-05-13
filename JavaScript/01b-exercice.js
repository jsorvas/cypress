// Déclaration de constantes
const url = "https://demoqa.com/automation-practice-form";
const titleFormulaire = "Student Registration Form";

// Informations utilisateur
const nom = "John";
const prenom = "Doe";
const email = "john.doe@example.com";
const telephone = "1234567890";
const age = "25";

// Création du message d'information
let info =
  "Nom : " +
  nom +
  "\n" +
  "Prénom : " +
  prenom +
  "\n" +
  "Email : " +
  email +
  "\n" +
  "Téléphone : " +
  telephone +
  "\n" +
  "Age : " +
  age +
  " ans";

// Affichage du message d'informations utilisateur
console.log("Les infos utilisateur sont : " + info);

//Vérification de l'âge de l'utilisateur
if (age >= 18) {
  console.log("L'utilisateur est majeur.");
} else {
  console.log("L'utilisateur est mineur.");
}
