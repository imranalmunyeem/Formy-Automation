/*
Instruction:
Step 1: Run in terminal (npm install --save-dev cypress-file-upload)
Step 2: import 'cypress-file-upload';
*/ 



///<reference types = 'cypress'/>
describe('File upload area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('fileUploadUrl'));
        cy.url().should('contain','fileupload');
    })

    it('File upload feature should work successfully',()=>{

    })
})