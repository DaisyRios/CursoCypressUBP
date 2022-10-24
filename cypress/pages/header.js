class headerlocators {
    constructor () {
        //Blue Bar
        this.loginRegisterBtn = 'ul[id="customer_menu_top"] a';
        //Cart & currency

        //Submenu
    }
}

export default class Header{
    constructor () {
        this.locators = new headerlocators();
    }
     getLoginRegisterButon(){
        return cy.get(this.locators.loginRegisterBtn);
    }

}