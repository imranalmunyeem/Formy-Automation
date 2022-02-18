///<reference types = 'cypress'/>

import WebformPO from "../../support/page_objects/WebformPO";
const webformpo = new WebformPO();
describe('Webform area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('webformUrl'));
        cy.url().should('include','form');
    })

    it('Fill up the web form',()=>{
        webformpo.inputFirstName('Test First Name');
        webformpo.inputLasttName('Test Last Name');
        webformpo.inputJobTitle('Test Engineer');
        webformpo.selectHighSchool();
        webformpo.selectCollege();
        webformpo.selectGradSchool();
        webformpo.checkMale();
        webformpo.uncheckMale();
        webformpo.checkFemale();
        webformpo.uncheckFemale();
        webformpo.checkPreferNotToSay();
        webformpo.uncheckPreferNotToSay();
        webformpo.select0to1YearOfExperience();
        webformpo.select2to4YearOfExperience();
        webformpo.select5to9YearOfExperience();
        webformpo.select10YearOfExperience();
        webformpo.selectDate('25/12/1995');
        webformpo.clickOnSubmit();
        webformpo.submissionAlert();
        cy.log('Test has completed');

    })
    

})