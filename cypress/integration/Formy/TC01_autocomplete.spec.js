///<reference types = 'cypress'/>

import AutocompletePO from "../../support/page_objects/AutocompletePO";

describe('Auto Complete',()=>{
    const autocompletepo = new AutocompletePO();
    beforeEach('Navigate to the Auto Complete page',()=>{
        cy.visit(Cypress.env('autocompleteUrl'));
        cy.url().should('include','autocomplete');

            
    })

    it('Verify Autocomplete Form header',()=>{
        //const autocompletepo = new AutocompletePO();
        autocompletepo.headerVerify();

    it('Fill up Autocomplete Form',()=>{
       // const autocompletepo = new AutocompletePO();
        autocompletepo.inputAddress('Test Address');
        autocompletepo.inputStreetAddress('Test Street Address');
        autocompletepo.inputStreetAddress2('Test Street Address 2');
        autocompletepo.inputCity('Test City');
        autocompletepo.inputState('Test State');
        autocompletepo.inputZipCode('Test Zip Code');
        autocompletepo.inputCountry('Test Country');
        cy.log('Test has completed');

    })
    })
})