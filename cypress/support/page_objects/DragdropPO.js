class DragdropPO{
    draganddrop(){
        const grabItem = cy.get('img');
        grabItem.should('be.visible');

        const box = cy.get('#box');
        box.should('be.visible');

        grabItem.drag('#box');
    }
}
export default DragdropPO;