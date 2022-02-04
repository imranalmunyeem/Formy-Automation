class AutocompletePO{
    headerVerify(){
        const h1Tag = cy.get('h1');
        h1Tag.should('be.visible');
        h1Tag.should('contain','Autocomplete');
    }

    inputAddress(address){
        const addressField = cy.get('#autocomplete');
        addressField.should('be.visible');
        addressField.clear();
        addressField.type(address);
        return this;
    }

    inputStreetAddress(streetaddress){
        const streetAddressField = cy.get('#street_number')
        streetAddressField.should('be.visible');
        streetAddressField.clear();
        streetAddressField.type(streetaddress);
        return this;
    }

    inputStreetAddress2(streetaddress2){
        const streetAddressField2 = cy.get('#route');
        streetAddressField2.should('be.visible');
        streetAddressField2.clear();
        streetAddressField2.type(streetaddress2);
        return this;
    }

    inputCity(city){
        const cityField = cy.get('#locality');
        cityField.should('be.visible');
        cityField.clear();
        cityField.type(city);
        return this;
    }

    inputState(state){
        const stateField = cy.get('#administrative_area_level_1');
        stateField.should('be.visible');
        stateField.clear();
        stateField.type(state);
        return this;
    }

    inputZipCode(zipcode){
        const zipCodeField = cy.get('#postal_code');
        zipCodeField.should('be.visible');
        zipCodeField.clear();
        zipCodeField.type(zipcode);
        return this;
    }

    inputCountry(country){
        const countryField = cy.getcy.get('#country');
        countryField.should('be.visible');
        countryField.clear();
        countryField.type(country);
        return this;
    }




}
export default AutocompletePO;