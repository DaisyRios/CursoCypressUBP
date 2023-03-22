/// <reference types="cypress" />

describe("Test de Pagina Eden", () => {

  it("Llamada a servicio: /inicio", () => {
    cy.callservice("inicio", "espectaculos");
  });
});
