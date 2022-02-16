///<reference types = 'cypress'/>

import SwitchwindowPO from "../../support/page_objects/SwitchwindowPO";

describe('Switch window area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('switchwindowUrl'));
        cy.url().should('include','switch-window');
    })

    it('Switching window should be successful',()=>{
        const switchwindowpo = new SwitchwindowPO();
        switchwindowpo.openNewTab();
        cy.get('.container').parents(); 
        switchwindowpo.openAlert();
    })
    cy.log('Test has completed');

})