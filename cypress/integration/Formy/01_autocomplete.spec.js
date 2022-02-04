///<reference types = 'cypress'/>

import AutocompletePO from "../../support/page_objects/AutocompletePO";

describe('Auto Complete',()=>{
    it('Navigate to the Auto Complete page',()=>{
        cy.visit(Cypress.env('autocompleteUrl'));
        cy.url().should('include','autocomplete');
    })

    it('Verify Autocomplete Form header',()=>{
        const autocompletepo = new AutocompletePO();
        autocompletepo.headerVerify();

    it('Fill up Autocomplete Form',()=>{
        const autocompletepo = new AutocompletePO();
        autocompletepo.inputAddress('Test');
        autocompletepo.inputStreetAddress('Test Street');
        autocompletepo.inputStreetAddress2('Test Street 2');
        autocompletepo.inputCity('Test City');
        autocompletepo.inputState('Test State');
        autocompletepo.inputZipCode('1234');
        autocompletepo.inputCountry('Test Country');

    })
    })
})