//Se debe importar el page object creados
/// <reference types="cypress" />
import login from "../pages/login.js";
import LoginPage from "../pages/loginOrion.js";

//Se debe agregar el describe para agrupar tests

describe ('Ejemplo de test basico', () => {
    beforeEach(() => {
      // Se debe acceder a la página
        cy.visit("http://orion.claro.amx/orion/login.html");
      });

//Se escribe el test

it ('Registrar una cuenta en Orion', () => {

    //Los page object utilizados
    ////Llamar al page object para poder usar los métodos

    const loginOrion = new LoginPage();

    //acá se hacen las acciones
    //Emplear los métodos y hacer las validaciones

    loginOrion.getUserInput().type('exc07188');
    loginOrion.getPassInput().type('Usuario02');
    loginOrion.getLoginBtn().click();
    loginOrion.getClientInput().type('14579FBA2B4B');
    loginOrion.getBuscarBtnInput().click();
    //Wifi
    loginOrion.getWifiBtn().click();
    cy.scrollTo('500px');
    loginOrion.getSmartWIFIBtn().click();
    cy.wait(5000);
    
    //Telefonia
    loginOrion.getTelefoniabtn().click();
    cy.wait(2000)
    loginOrion.getInputLineaNumeroBtn().select("+541154319774");
    cy.wait(2000)
    loginOrion.getCerrarBtn().click();
    //GPON
    
    loginOrion.getGPONBtn().click();
    cy.wait(5000);
    cy.scrollTo('500px');
   

    //getInputAddressFrmPostCode().type("2222")

    

  });
  
});
