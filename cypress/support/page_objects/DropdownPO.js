class DropdownPO{
    clickOnDropdown(){
      const dropdownButton = cy.get('#dropdownMenuButton');
      dropdownButton.should('be.visible');
      dropdownButton.click();  
    }

}
export default DropdownPO;