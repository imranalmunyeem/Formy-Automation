import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';

//--------------------------File Upload Command-------------------------------//
Cypress.Commands.add('uploadfile', () => {
    cy.get('#file-upload-field').invoke('removeAttr', 'target').click({force:true})
        cy.fixture("car.jpg", "base64").then(fileContent => {
            cy.get('#file-upload-field').attachFile(
                {
                    fileContent,
                    fileName: "car.jpg",
                    mimeType: "image/jpg"
                },
                {
                    uploadType: "input"
                }
            )
        });
    });
        //Reset
       // cy.get(':nth-child(3) > .btn').click();
