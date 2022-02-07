class WebformPO{
   inputFirstName(firstname){
       const firstNameField = cy.get('#first-name');
       firstNameField.should('be.visible');
       firstNameField.clear();
       firstNameField.type(firstname);
       return this;
   } 

   inputLasttName(lastname){
    const lastNameField = cy.get('#last-name');
    lastNameField.should('be.visible');
    lastNameField.clear();
    lastNameField.type(lastname);
    return this;
} 

inputJobTitle(jobtitle){
    const jobTitleField = cy.get('#job-title');
    jobTitleField.should('be.visible');
    jobTitleField.clear();
    jobTitleField.type(jobtitle);
    return this;
} 

//----------------Highest Level of Education-----------------------//
    selectHighSchool(){
        const highSchoolField = cy.get('[type="radio"]');
        highSchoolField.should('be.visible');
        highSchoolField.check('radio-button-1');
    }

    selectCollege(){
        const collegeField = cy.get('[type="radio"]');
        collegeField.should('be.visible');
        collegeField.check('radio-button-2');
    }

    selectGradSchool(){
        const gradSchoolField = cy.get('[type="radio"]');
        gradSchoolField.should('be.visible');
        gradSchoolField.check('radio-button-3');
    }

//----------------------------------------Sex----------------------------------------//
    checkMale(){
        const maleBox = cy.get('[type="checkbox"]');
        maleBox.should('be.visible');
        maleBox.check('checkbox-1');
    }

    uncheckMale(){
        const maleBox = cy.get('[type="checkbox"]');
        maleBox.should('be.visible');
        maleBox.uncheck('checkbox-1');
    }

    checkFemale(){
        const femaleBox = cy.get('[type="checkbox"]');
        femaleBox.should('be.visible');
        femaleBox.check('checkbox-2');
    }

    uncheckFemale(){
        const femaleBox = cy.get('[type="checkbox"]');
        femaleBox.should('be.visible');
        femaleBox.uncheck('checkbox-2');
    }

    checkPreferNotToSay(){
        const preferNotToSayBox = cy.get('[type="checkbox"]');
        preferNotToSayBox.should('be.visible');
        preferNotToSayBox.check('checkbox-3');
    }

    uncheckPreferNotToSay(){
        const preferNotToSayBox = cy.get('[type="checkbox"]');
        preferNotToSayBox.should('be.visible');
        preferNotToSayBox.uncheck('checkbox-3');
    }

//------------------------------Year of Experience---------------------------//
    select0to1YearOfExperience(){
        cy.get('#select-menu').select('1');
    }
       
    select2to4YearOfExperience(){
            cy.get('#select-menu').select('2');  
    }  

    select5to9YearOfExperience(){
        cy.get('#select-menu').select('3');  
    }  

    select10YearOfExperience(){
    cy.get('#select-menu').select('4');  
    }  

//--------------------------------Date Picker-------------------------------------//
    selectDate(datemonthyear){
        const dateField = cy.get('#datepicker');
        dateField.should('be.visible');
        dateField.clear();
        dateField.type(datemonthyear);
        return this;
    }    

//----------------------------------Submit---------------------------------------//
    clickOnSubmit(){
        const submitButton = cy.get('.btn');
        submitButton.should('be.visible');
        submitButton.click();
    }    

//-----------------------------------Submission Alert----------------------------//
    submissionAlert(){
        const submissionMessage = cy.get('.alert');
        submissionMessage.should('be.visible');
        submissionMessage.should('contain','The form was successfully submitted!');
    }    
}
export default WebformPO;