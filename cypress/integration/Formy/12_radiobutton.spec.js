///<reference types = 'cypress'/>

import RadiobuttonsPO from "../../support/page_objects/RadiobuttonsPO";

describe('Radio button area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('radiobuttonUrl'));
        cy.url().should('include','radiobutton');
    })

    it('Radio Button should be worked successfully',()=>{
       const radiobuttonpo = new RadiobuttonsPO;
       radiobuttonpo.radioButton3();
       radiobuttonpo.radioButton2();
       radiobuttonpo.radioButton1();
    })
})