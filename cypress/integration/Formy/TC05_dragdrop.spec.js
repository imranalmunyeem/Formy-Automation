/*
Instruction:
Step 1: Run in terminal (npm install --save-dev @4tw/cypress-drag-drop)
Step 2: import '@4tw/cypress-drag-drop';
*/ 

///<reference types = 'cypress'/>

import DragdropPO from '../../support/page_objects/DragdropPO';

describe('Drag and Drop Area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('draganddropUrl'));
    })
    
      it('Drag and drop should be succesful', () => {
        const dragdropo = new DragdropPO();
        dragdropo.draganddrop();
        cy.log('Test has completed');

      });

})