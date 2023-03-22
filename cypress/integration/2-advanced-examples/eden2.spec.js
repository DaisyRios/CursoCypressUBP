
/// <reference types= "cypress" />
describe("Test de Pagina Eden", () => {
    it("Llamada a servicio: /inicio", () => {
    cy.callService("inicio", "espectaculos", "espectaculos_sch.json");
    
    });  

//Llamo segundo servicio puntos de ventas

it("Llamada a servicio: /puntosdeventas", () => {
  cy.callService("puntosdeventas", "puntosdeventas", "puntosdeventa_sch.json");
  });
});

