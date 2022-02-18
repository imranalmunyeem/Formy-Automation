///<reference types = 'cypress'/>

import DropdownPO from "../../support/page_objects/DropdownPO";

describe('Dropdown Area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('dropdownUrl'));
        cy.url().should('include','dropdown');
    })

    it('Dropdown',()=>{
        const dropdownpo = new DropdownPO();
        dropdownpo.clickOnDropdown();
        cy.log('Test has completed');
    })
    

})