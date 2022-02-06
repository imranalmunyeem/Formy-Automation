class ButtonsPO{
    clickOnPrimary(){
        const primary = cy.get('.col-sm-8 > .btn-primary');
        primary.click();
    }

    clickOnSuccess(){
        const success = cy.get('.btn-success');
        success.click();
    }

    clickOnInfo(){
        const info = cy.get('.btn-info');
        info.click();
    }

    clickOnWarning(){
        const warning = cy.get('.btn-warning');
        warning.click();
    }

    clickOnDanger(){
        const danger = cy.get('.btn-danger');
        danger.click();
    }

    clickOnLink(){
        const link = cy.get('.btn-link');
        link.click();
    }

    clickOnLeft(){
        const left = cy.get(':nth-child(2) > .input-group > .col-sm-8 > .btn-group > :nth-child(1)');
        left.click();
    }

    clickOnMiddle(){
        const middle = cy.get(':nth-child(2) > .input-group > .col-sm-8 > .btn-group > :nth-child(2)');
        middle.click();
    }

    clickOnRight(){
        const right = cy.get(':nth-child(2) > .input-group > .col-sm-8 > .btn-group > :nth-child(3)');
        right.click();
    }

    clickOn1(){
        const number1 = cy.get('[aria-label="Button group with nested dropdown"] > :nth-child(1)');
        number1.click();
    }

    clickOn2(){
        const number2 = cy.get('[aria-label="Button group with nested dropdown"] > :nth-child(2)');
        number2.click();
    }

    clickOnDropdown(){
        const dropdownBar = cy.get('.dropdown-menu');
        dropdownBar.find('dropdown-item').select('Dropdown link 1');
    }
 }
export default ButtonsPO;