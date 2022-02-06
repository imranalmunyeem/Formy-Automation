class RadiobuttonsPO{
    radioButton1(){
        const button1 = cy.get(':nth-child(4) > .form-check-label');
        button1.should('be.visible');
        button1.click();
    }

    radioButton2(){;
        const button2 = cy.get(':nth-child(6) > .form-check-label');
        button2.should('be.visible');
        button2.click();
}

    radioButton3(){
        const button3 = cy.get(':nth-child(8) > .form-check-label');
        button3.should('be.visible');
        button3.click();
    }
}
export default RadiobuttonsPO;