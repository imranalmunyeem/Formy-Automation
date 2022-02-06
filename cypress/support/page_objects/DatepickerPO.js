class DatepickerPO{
    datepicker(datemonthyear){
        const datepickerField = cy.get('#datepicker');
        datepickerField.should('be.visible');
        datepickerField.clear();
        datepickerField.type(datemonthyear);
    }
}
export default DatepickerPO;