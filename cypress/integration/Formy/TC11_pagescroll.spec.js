///<reference types = 'cypress'/>
describe('Page Scroll area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('pagescrollUrl'));
        cy.url().should('include','scroll');
    })

    it('Scrolling page should be successful',()=>{
        cy.scrollTo(0, 700) // Scroll the window 500px down
       // cy.get('h1').scrollTo('form > :nth-child(2) > :nth-child(2)') // Scroll 'sidebar' to its bottom
       cy.log('Test has completed');
    })
    

})