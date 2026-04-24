/// <reference types="cypress" />

describe("Tests sur le site demoblaze", () => {
    
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
    })
    
    it("Test sur les clic", () => {

        //Ouvrir et fermer Contact
        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        
        cy.wait(2000)

        //About us
        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(1000)
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()

        //Cart
        cy.get('#cartur').click()
        cy.wait(2000)

        //Login
        cy.get('#login2').click()
        cy.wait(2000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        cy.wait(2000)

        //Sign up
        cy.get('#signin2').click()
        cy.wait(2000)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        cy.wait(2000)

        //Retour home
        cy.get('#nava').click()
        cy.wait(2000)

        //Clic sur la partie Laptops
        cy.contains("Laptops").click()
        cy.wait(2000)
 
        //Clic sur la partie Monitors
        cy.contains("Monitors").click()
        cy.wait(2000)

        //Cliquer sur Apple monitor 24
        cy.contains("Apple monitor 24").click()
        cy.wait(2000)

        cy.get('.col-sm-12 > .btn').click() //Ajouter au panier
        cy.wait(2000)

        //Cliquer sur Cart
        cy.get('#cartur').click()
        cy.wait(2000)

        //Vérifier l'ajout de la commande
        cy.get('.success > :nth-child(2)').should("have.text", "Apple monitor 24")

    })

    afterEach(() => {
        cy.clearAllCookies()
    })
})