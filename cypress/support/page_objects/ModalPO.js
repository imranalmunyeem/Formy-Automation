class ModalPO{
    openModal(){
        const modalButton = cy.get('#modal-button');
        modalButton.should('be.visible');
        modalButton.click();
    }

    clickOnOk(){;
        const okButton =cy.get('#ok-button');
        okButton.should('be.visible');
        okButton.click();
}

    clickOnClose(){
        const cancelButton = cy.get('#close-button');
        cancelButton.should('be.visible');
        cancelButton.click();
    }
}
export default ModalPO;