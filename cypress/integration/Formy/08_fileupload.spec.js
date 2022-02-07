/*
Instruction:
Step 1: Run in terminal (npm install --save-dev cypress-file-upload)
Step 2: import 'cypress-file-upload' in command.js file from support
*/ 

///<reference types = 'cypress'/>

describe('File upload area',()=>{
    beforeEach('Navigate to the website',()=>{
        cy.visit(Cypress.env('fileUploadUrl'));
        cy.url().should('contain','fileupload');
    })

    it('Uploading a file should be successfull',()=>{
        cy.uploadfile();  //Running from custom command
        
        /* Altertnativ way:
        const fixtureFile = 'car.jpg';
        cy.get(':nth-child(1) > .btn').invoke('removeAttr', 'target').click({force:true})
        cy.get('#file-upload-field').attachFile(fixtureFile);
        */
    })

})
