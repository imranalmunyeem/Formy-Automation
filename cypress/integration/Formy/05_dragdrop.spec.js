///<reference types = 'cypress'/>
import '@4tw/cypress-drag-drop'
import DragdropPO from '../../support/page_objects/DragdropPO';

describe('Drag and Drop Area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('draganddropUrl'));
    })
    
      it('should drag ice cream to the order', () => {
        const dragdropo = new DragdropPO();
        dragdropo.draganddrop();
      });
})