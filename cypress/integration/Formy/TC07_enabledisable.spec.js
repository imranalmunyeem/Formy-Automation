/// <reference types = 'cypress'/>

import EnabledisablePO from "../../support/page_objects/EnabledisablePO";

describe('Enable and Disable',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('enabledisableUrl'));
        cy.url().should('include','enabled');
    })

    it('Enable and Disable should be worked properly',()=>{
        const enabledisablepo = new EnabledisablePO();
        enabledisablepo.checkDisableInputBox();
        enabledisablepo.checkEnableInputBox();
        cy.log('Test has completed');
    })
    

})