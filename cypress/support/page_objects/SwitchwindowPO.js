class SwitchwindowPO{
    openNewTab(){
        const newTabButton = cy.get('#new-tab-button');
        newTabButton.should('be.visible');

        newTabButton.invoke('removeAttr', 'target').click()
        cy.url().should('include', 'formy')
    }

    openAlert(){
        const alert = cy.get('#alert-button');
        alert.should('be.visible');
        
    }

}
export default SwitchwindowPO;