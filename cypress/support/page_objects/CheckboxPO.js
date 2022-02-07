class CheckboxPO{
    checkOnbox1(){
        const checkbox1 = cy.get('[type="checkbox"]');
        checkbox1.should('be.visible');
        checkbox1.check('checkbox-1');
    }

    uncheckOnbox1(){
        const uncheckbox1 = cy.get('[type="checkbox"]');
        uncheckbox1.should('be.visible');
        uncheckbox1.uncheck('checkbox-1');
    }

    checkOnbox2(){
        const checkbox2 = cy.get('[type="checkbox"]');
        checkbox2.should('be.visible');
        checkbox2.check('checkbox-2');
    }

    uncheckOnbox2(){
        const uncheckbox2= cy.get('[type="checkbox"]');
        uncheckbox2.should('be.visible');
        uncheckbox2.uncheck('checkbox-2');
    }


    checkOnbox3(){
        const checkbox3 = cy.get('[type="checkbox"]');
        checkbox3.should('be.visible');
        checkbox3.check('checkbox-3');
    }

    uncheckOnbox3(){
        const uncheckbox3 = cy.get('[type="checkbox"]');
        uncheckbox3.should('be.visible');
        uncheckbox3.uncheck('checkbox-2');
        }
    
    }

export default CheckboxPO;