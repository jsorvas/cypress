// Données utilisateurs (déjà définies pour vous)
let users = [
  {
    name: "Alice",
    role: "admin",
    active: true,
  },
  {
    name: "Bob",
    role: "user",
    active: true,
  },
  {
    name: "Charlie",
    role: "user",
    active: false,
  },
  {
    name: "Diana",
    role: "admin",
    active: false,
  },
];

// Fonction de vérification des admins

let nbAdmin = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].role == "admin") {
    console.log(users[i].name + " est admin");
    nbAdmin += 1;
  } else {
    console.log(users[i].name + " est user");
  }
}
console.log("Il y a " + nbAdmin + " admin(s)");

// Données des cases à cocher (déjà définies pour vous)
let checkboxes = [
  {
    id: "option1",
    checked: true,
  },
  {
    id: "option2",
    checked: false,
  },
  {
    id: "option3",
    checked: true,
  },
];

// Fonction de traitement des cases à cocher

for (let t = 0; t < checkboxes.length; t++) {
  switch (checkboxes[t].id) {
    case "option1":
      console.log("Il s'agit de l'option1");
      break;

    case "option2":
      console.log("Il s'agit de l'option2");
      break;
    default:
      console.log("Il s'agit de l'option3");
      break;
  }
}

let nbCasesCochees = 0;

for (let r = 0; r < checkboxes.length; r++) {
  if (checkboxes[r].checked === true) {
    nbCasesCochees += 1;
  }
}
console.log("Il y a " + nbCasesCochees + " cases cochées");
