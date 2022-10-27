//Se debe importar el page object creado la clase anterior
/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import LoginPage from "../pages/login.js";
import Account from "../pages/account.js";
import Data from "../fixtures/users2.json";


//Se debe agregar el describe para agrupar tests

describe ('Ejemplo de test basico', () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
      });

//Se agrega un segundo it para realizar las acciones editar, borrar, escribir nuevamente y guardar 

      it ('Registrar una cuenta', () => {
        //Los page object utilizados

        const header = new HeaderPage();
        const login = new LoginPage();
        const account = new Account();

        //acá se hacen las acciones

        header.getLoginRegisterButon().click();
        login.getUserInput().type(Data.users[0].user);
        login.getPassInput().type(Data.users[0].password);
        login.getLoginBtn().click();
        account.getManageAccountBtn().click();
        account.getAddNewAddress().click();
        account.getInputFistName().type("Pedro");
        account.getInputLastName().type("Sotillo");
        account.getInputCompany ().type("Soloempresa");
        account.getInputAddress1().type("Lavalle");
        account.getInputAddress2().type("Cordoba2");
        account.getInputCity().type("CABA");
        account.getInputAddressFrmPostCode().type("2222");
        account.getInputCountry().select("Argentina");
        account.getInputAddressFrmZone().select("Buenos Aires");
        account.getInputYesBtn().click();
        account.getInputContinuarBtn().click();

      
      });
});
