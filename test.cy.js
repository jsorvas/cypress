/// <reference types="cypress" />

describe("Premiers tests avec Cypress", () => {
    
    //Avant chaque test, je vais aller sur le site web
    beforeEach (() => {
        cy.visit("/todo");
    })

    it("Test de vérification", () => {
        
        //Vérifier la liste, puis le champ
        cy.get(".todo-list");   //liste globale
        cy.get(".new-todo");    //champ

        //Les vérifications de texte se font avec get(".class localName")
        cy.get(".todo-list li").should("have.length", 2);   //2 noms dans la liste

        cy.get(".todo-list li").first().should("have.text", "Pay electric bill");    //Vérifier le 1er élément de la liste
        cy.get(".todo-list li").last().should("have.text", "Walk the dog");    //Vérifier le dernier élément de la liste

        cy.get(".header h1").should("have.text", "todos");  //Titre 
    });

    it("Créer une to do list", () => {
        
        //Variable
        const nvlListe = "Lire un bon livre";

        //data-test utilisé : [datatest]
        cy.get('[data-test="new-todo"]').type(`${nvlListe}{enter}`);

        //Vérifier dernier texte dans la liste
        cy.get(".todo-list li").last().should("have.text", `${nvlListe}`);

    });

    it("Cocher éléments liste", () => {
        
        //Cliquer sur les checkbox
        cy.contains('Pay electric bill')
            .parent()
            .find('input[type="checkbox"]')
            .click();

        cy.contains('Walk the dog')
            .parent()
            .find('input[type="checkbox"]')
            .check();
    });

    it("Cocher éléments liste, avec alias", () => {
        
        //Cliquer sur les checkbox
        cy.contains('Pay electric bill')
            .parent()
            .find('input[type="checkbox"]')
            .as('checkboxPay');

        cy.get('@checkboxPay').click();

        cy.contains('Walk the dog')
            .parent()
            .find('input[type="checkbox"]')
            .as('checkboxWalk');

        cy.get('@checkboxWalk').check();
    });

    it.only("Cocher éléments liste avec alias, wrap et trigger", () => {
        
        //Cliquer sur les checkbox
        cy.contains('Pay electric bill')
            .parent()
            .as('div');
       
        //Pour débuggage
        //cy.pause();
        //debugger;   //Ne fonctionne qu'avec l'inspecteur activer pendant le test; ne pas le privilégier
        //cy.contains('Pay electric bill').parent().as('div').debug();

        cy.get('@div').then(($div) => {
          cy.wrap($div).find('input[type="checkbox"]').check();
          cy.wrap($div).find('input[type="checkbox"]').should("be.checked");    //On vérifie qu'il est coché

          cy.wrap($div).find('input[type="checkbox"]').uncheck();   
          cy.wrap($div).find('input[type="checkbox"]').should("not.be.checked");    //On vérifie qu'il n'est pas coché
          
          //Avec un trigger, on peut faire des actions sur les éléments
          //Montrer, puis cliquer sur le bouton de suppression
          cy.wrap($div)
            .trigger('mouseover')
            .find('button[class="destroy todo-button"]')
            .invoke('show')
            .click();
          
        });

        cy.contains('Walk the dog')
            .parent()
            .as('div');
       cy.get('@div').then(($div) => {
            cy.wrap($div).find('input[type="checkbox"]').check();
            cy.wrap($div).find('input[type="checkbox"]').should("be.checked");    //On vérifie qu'il est coché
       });

    })

})