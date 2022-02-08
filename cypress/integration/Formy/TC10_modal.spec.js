///<reference types = 'cypress'/>

import ModalPO from "../../support/page_objects/ModalPO";

describe('Modal area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('modalUrl'));
        cy.url().should('include','modal');
    })

    it('Modal should be visible',()=>{
        const modalpo = new ModalPO;
        modalpo.openModal();
        modalpo.clickOnOk();
        modalpo.clickOnClose();

    })
})