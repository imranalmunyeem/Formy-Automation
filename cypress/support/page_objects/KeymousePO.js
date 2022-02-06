class KeymousePO{
    enterFullname(fullname){
        const fullNameField = cy.get('#name');
        fullNameField.should('be.visible');
        fullNameField.clear();
        fullNameField.type(fullname)
        return this;
    }

    clickOnButton(){
        const button = cy.get('#button');
        button.click();
    }
}
export default KeymousePO;