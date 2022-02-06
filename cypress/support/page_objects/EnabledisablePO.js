class EnabledisablePO{
    checkDisableInputBox(){
        const disableBox = cy.get('#disabledInput');
        disableBox.should('be.visible');
        disableBox.should('be.disabled');
    }

    checkEnableInputBox(){
        const enableBox = cy.get('#input');
        enableBox.should('be.visible');
        enableBox.should('not.be.disabled');
    }
}
export default EnabledisablePO;