class CheckboxPO{
    checkOnbox1(){
        const checkbox1 = cy.get('#checkbox-1');
        checkbox1.should('be.visible');
        checkbox1.check();
    }

    uncheckOnbox1(){
        const uncheckbox1 = cy.get('#checkbox-1');
        uncheckbox1.should('be.visible');
        uncheckbox1.uncheck();
    }

    checkOnbox2(){
        const checkbox2 = cy.get('#checkbox-2');
        checkbox2.should('be.visible');
        checkbox2.check();
    }

    uncheckOnbox2(){
        const uncheckbox2= cy.get('#checkbox-2');
        uncheckbox2.should('be.visible');
        uncheckbox2.uncheck();
    }


    checkOnbox3(){
        const checkbox3 = cy.get('#checkbox-3');
        checkbox3.should('be.visible');
        checkbox3.check();
    }

    uncheckOnbox3(){
        const uncheckbox3 = cy.get('#checkbox-3');
        uncheckbox3.should('be.visible');
        uncheckbox3.uncheck();
        }
    
    }

export default CheckboxPO;