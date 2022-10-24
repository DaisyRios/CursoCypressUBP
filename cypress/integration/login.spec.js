/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import LoginPage from "../pages/login.js";


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });
 

  it("Login OK", () => {
    const header = new HeaderPage();
    const login = new LoginPage();

    header.getLoginRegisterButon().click();
    login.getUserInput().type('Daisy');
    login.getPassInput().type('pass124');
    login.getLoginBtn().click();
    login.getAlertBox().should("contain.text","Error: Incorrect login or password provided.");
  });

});
