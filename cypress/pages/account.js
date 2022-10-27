class accountLocators {
    constructor () {
        //title
        //Main buttons
        //Secondary buttons
        //this.manageAccountBtn = 'a[data-original-title="Manage Address Book"]'. Esto se mapeo en clase y no funciono
        //Completar formulario
        this.manageAccountBtn =".nav-dash > :nth-child(3) > a > .fa"
        this.addNewAdress = 'a[title="New Address"]';
        this.inputFistName = "#AddressFrm_firstname";
        this.inputLastName = '#AddressFrm_lastname';
        this.inputCompany = '#AddressFrm_company';
        this.inputAddress1 = '#AddressFrm_address_1';
        this.inputAddress2 = '#AddressFrm_address_2';
        this.inputCity = '#AddressFrm_city'; 
        this.inputAddressFrmZone = '#AddressFrm_zone_id'; 
        this.inputAddressFrmPostCode = '#AddressFrm_postcode'; 
        this.inputCountry = '#AddressFrm_country_id'; 
        //Confirmacion YES
        this.inputYesBtn = '[for="AddressFrm_default1"]';
        //Boton Continuar
        this.inputContinuarBtn = '.col-md-12 > .btn-orange';


    }
}

//Colocar el selector en una caja

export default class Account {
    constructor () {
        this.locators = new accountLocators();
    }

    getManageAccountBtn() {
        return cy.get(this.locators.manageAccountBtn);
    }

    getAddNewAddress(){
        return cy.get(this.locators.addNewAdress);

    }

    getInputFistName(){
        return cy.get(this.locators.inputFistName);

    }
    getInputLastName(){
        return cy.get(this.locators.inputLastName);

    }

    getInputCompany(){
        return cy.get(this.locators.inputCompany);

    }

    getInputAddress1(){
        return cy.get(this.locators.inputAddress1);

    }

    getInputAddress2(){
        return cy.get(this.locators.inputAddress2);

    }

    getInputCity(){
        return cy.get(this.locators.inputCity);

    }

    getInputAddressFrmZone(){
        return cy.get(this.locators.inputAddressFrmZone);

    }

    getInputAddressFrmPostCode(){
        return cy.get(this.locators.inputAddressFrmPostCode);

    }

    getInputCountry(){
        return cy.get(this.locators.inputCountry);

    }

    getInputYesBtn(){
        return cy.get(this.locators.inputYesBtn);

    }

    getInputContinuarBtn(){
        return cy.get(this.locators.inputContinuarBtn);

    }
     

}