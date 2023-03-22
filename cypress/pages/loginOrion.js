//Login de Orion
class loginLocators {
    constructor() {
        this.inputUser = ':nth-child(2) > .form-control';
        this.inputPass = ':nth-child(3) > .form-control';
        this.loginBtn = '.form-actions > .btn';
        this.inputClient = '#dp_macs';
        this.inputBuscarBtn = '[ng-show="isPanelHomeActive()"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .col-sm-12 > .portlet > .bg-grey-salsa > .caption > .blue-chambray';
       //wifi
        this.WifiBtn = '[ng-click="cargarEquipo();"] > .nav-link > .fa';
        this.SmartWIFIBtn = 'button[class="btn btn-default wifi-tab"]';
        //Telefonia
        this.Telefoniabtn = '[ng-click="cargarTelefonia();"] > .nav-link';
        this.inputLineaNumeroBtn = '#tel_ln';
        this.CerrarBtn = '#win_telefonia > .modal-dialog > .modal-content > .modal-footer > .btn-secondary';
        this.GPONBtn = '[ng-click="setActiveTabGPON();"] > .nav-link';
        

    }
}

export default class loginOrion {
    constructor() {
        this.locators= new loginLocators();
    }

getUserInput() {
    return cy.get(this.locators.inputUser);
}

getPassInput() {
    return cy.get(this.locators.inputPass);
}

getLoginBtn(){
    return cy.get(this.locators.loginBtn);
}

getClientInput() {
    return cy.get(this.locators.inputClient);
}

getBuscarBtnInput(){
    return cy.get(this.locators.inputBuscarBtn);

}

getWifiBtn(){
    return cy.get(this.locators.WifiBtn);
}

getSmartWIFIBtn(){
    return cy.get(this.locators.SmartWIFIBtn);
}

getTelefoniabtn(){
    return cy.get(this.locators.Telefoniabtn);
}

getInputLineaNumeroBtn() {
    return cy.get(this.locators.inputLineaNumeroBtn);
}

getCerrarBtn() {
    return cy.get(this.locators.CerrarBtn);
}

getGPONBtn() {
    return cy.get(this.locators.GPONBtn);
}

}