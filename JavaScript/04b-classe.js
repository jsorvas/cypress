// Les classes

class Animal {
  constructor(nom, espece) {
    this.nom = nom;
    this.espece = espece;
  }
  description() {
    console.log(
      `Cet animal s'appelle ${this.nom}, et c'est un(e) ${this.espece}`,
    );
  }
}

//Création d'un objet à partir d'une classe

let unAnimal = new Animal("Minette", "chatte");
unAnimal.description();
