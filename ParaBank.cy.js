/// <reference types="cypress" />

describe('Tests sur le site Parabank', () => {
    
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    it('Vérification du titre', () => {
        cy.wait(1000)
        
        //cy.title().should('eq', 'ParaBank')
        cy.get('[title="ParaBank"]').should('be.visible')
    })

    it('Vérification du menu et des 3 boutons', () => { 
        cy.get('[class="leftmenu"]').as('menu')

        cy.get('@menu').then(($menu) => {
           cy.wrap($menu).find('[class="Solutions"]').should('be.visible')
           cy.wrap($menu).contains('About Us')
           cy.wrap($menu).contains('Services')
           cy.wrap($menu).contains('Products')
           cy.wrap($menu).contains('Locations')
           cy.wrap($menu).contains('Admin Page')
        })
        
        cy.get('[class="home"]').should('be.visible')
        cy.get('[class="aboutus"]').should('be.visible')
        cy.get('[class="contact"]').should('be.visible')
    })

    beforeEach(() => { 
        cy.clearAllCookies()
    })
})