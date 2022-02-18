///<reference types = 'cypress'/>

import DatepickerPO from "../../support/page_objects/DatepickerPO";

describe('Date Picker',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('datepickerUrl'));
        cy.url().should('include','datepicker');
    })

    it('Pick the date',()=>{
        const datepickerpo = new DatepickerPO();
        datepickerpo.datepicker('25/12/1995');
        cy.log('Test has completed');

    })  
    

})