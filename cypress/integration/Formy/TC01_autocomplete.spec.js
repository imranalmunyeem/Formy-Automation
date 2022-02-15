///<reference types = 'cypress'/>

import AutocompletePO from "../../support/page_objects/AutocompletePO";

describe('Auto Complete',()=>{
    beforeEach('Navigate to the Auto Complete page',()=>{
        cy.visit(Cypress.env('autocompleteUrl'));
        cy.url().should('include','autocomplete');
            cy.fixture('datafile').then(function(datafile){
                this.datafile = datafile;
            })
            
    })

    it('Verify Autocomplete Form header',()=>{
        const autocompletepo = new AutocompletePO();
        autocompletepo.headerVerify();

    it('Fill up Autocomplete Form',()=>{
        const autocompletepo = new AutocompletePO();
        autocompletepo.inputAddress(this.datafile.address);
        autocompletepo.inputStreetAddress(this.data.streetaddress);
        autocompletepo.inputStreetAddress2(this.data.streetaddress2);
        autocompletepo.inputCity(this.data.city);
        autocompletepo.inputState(this.data.state);
        autocompletepo.inputZipCode(this.data.zipcode);
        autocompletepo.inputCountry(this.data.country);

    })
    })
})