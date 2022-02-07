class RadiobuttonsPO{
    radioButton1(){
        const button1 = cy.get('[type="radio"]');
        button1.should('be.visible');
        button1.check('option1');
    }

    radioButton2(){;
        const button2 = cy.get('[type="radio"]');
        button2.should('be.visible');
        button2.check('option2');
}

    radioButton3(){
        const button3 = cy.get('[type="radio"]');
        button3.should('be.visible');
        button3.check('option3');
    }
}
export default RadiobuttonsPO;