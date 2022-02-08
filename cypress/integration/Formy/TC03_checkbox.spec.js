///<reference types = 'cypress'/>

import CheckboxPO from "../../support/page_objects/CheckboxPO";

describe('Checkbox Area',()=>{

    beforeEach('Navigate to the wesbsite',()=>{
        cy.visit(Cypress.env('checkboxUrl'));
    })

    context('Chekbox 1',()=>{
        it('Checking on box 1 should be successfull',()=>{
            const checkboxpo = new CheckboxPO();
            checkboxpo.checkOnbox1();
        })

        it('Unchecking on box 1 should be successfull',()=>{
            const checkboxpo = new CheckboxPO();
            checkboxpo.uncheckOnbox1();
        })
    })

    context('Chekbox 2', ()=>{
        it('Checking on box 2 should be successfull',()=>{
            const checkboxpo = new CheckboxPO();
            checkboxpo.checkOnbox2();
        })

        
        it('Unchecking on box 2 should be successfull',()=>{
            const checkboxpo = new CheckboxPO();
            checkboxpo.uncheckOnbox2();
        })
    })

    context('Checkbox 3',()=>{
        it('Checking on box 3 should be successfull',()=>{
            const checkboxpo = new CheckboxPO();
            checkboxpo.checkOnbox3();
        })

        
        it('Unchecking on box 3 should be successfull',()=>{
            const checkboxpo = new CheckboxPO();
            checkboxpo.uncheckOnbox3();
        })
    })
})