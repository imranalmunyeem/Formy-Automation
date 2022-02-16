///<reference types = 'cypress'/>

import ButtonsPO from "../../support/page_objects/ButtonsPO";

describe('Button Area',()=>{
    before('Navigate to the website',()=>{
        cy.visit(Cypress.env('buttonsUrl'));
    })

    it('Click on the different buttons should be successful',()=>{
        const buttonspo = new ButtonsPO();
        buttonspo.clickOnPrimary();
        buttonspo.clickOnSuccess();
        buttonspo.clickOnInfo();
        buttonspo.clickOnWarning();
        buttonspo.clickOnDanger();
        buttonspo.clickOnLink();
        buttonspo.clickOnLeft();
        buttonspo.clickOnMiddle();
        buttonspo.clickOnRight();
        buttonspo.clickOn1();
        buttonspo.clickOn2();
        cy.log('Test has completed');

    })
})