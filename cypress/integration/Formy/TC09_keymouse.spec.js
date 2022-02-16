///<reference types ='cypress'/>

import KeymousePO from "../../support/page_objects/KeymousePO";

describe('Keyboard and Mouse Input area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('keyandmouseUrl'));
        cy.url().should('include','keypress');
    })

    it('Key and Mouse functions should be worked properly',()=>{
        const Keymousepo = new KeymousePO();
        Keymousepo.enterFullname('Automation Tester');
        Keymousepo.clickOnButton();

    })
    cy.log('Test has completed');

})