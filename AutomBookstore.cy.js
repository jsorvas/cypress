/// <reference types="cypress" />

describe("Site web Automation Bookstore", () => {
    
    beforeEach(() => {
        //Aller sur le site web
        cy.visit("https://automationbookstore.dev/");
    })
    
    it("Vérifications des titres", () => {

        //Vérifier le titre
        cy.get(".ui-title").should("have.text", "Automation Bookstore");

        //Vérifier les écrits de la 1ère carte (avec ID) 
        cy.get("#pid1_price").should("have.text", "$9.99");
        cy.get("#pid1_title").should("have.text", "Test Automation in the Real World");
        cy.get("#pid1_author").should("have.text", "Greg Paskal");

        //Taper dans la barre de recherche
        //cy.get(".ui-focus").type("BDD");
        cy.get('.ui-input-search').parent().as("BarreRecherche");

        cy.get('@BarreRecherche').then(($BarreRecherche) => {
            cy.wrap($BarreRecherche).type("BDD");
        })
        
        //Vérifier
        cy.get(".ui-li-thumb").last();
        cy.get("#pid8_title").should("have.text", "BDD in Action");

        //cy.get('.ui-input-clear').click;
        

    })
})