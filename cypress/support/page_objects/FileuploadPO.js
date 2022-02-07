class FileuploadPO{
    clickOnChoose(){
        const chooseButton = cy.get(':nth-child(1) > .btn');
        chooseButton.click();
    }
}
export default FileuploadPO;