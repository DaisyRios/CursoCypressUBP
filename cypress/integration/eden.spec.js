/// <reference types= "cypress" />
import EdenPage from "../pages/eden.js";

describe ("test de Pagina Eden", () => {
  it("Llamada a servicio", () => {
    cy.request({
      metod: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/eden/eden.json",Response.body);
    });
   });
});

//Segundo test

describe ("test de Pagina Eden", () => {
it("Llamada a servicio", () => {
  cy.request({
    metod: "GET",
    url: "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/calendario/dias?month=&year=",
  }).then((Response) => {
    expect(Response.status).to.eq(200);
    cy.log(JSON.stringify(Response));
    cy.writeFile("cypress/fixtures/eden/Calendario.json",Response.body);
  });
 });
});

// Validacion de tarjets

it.only("Verificar las cards de los espectaculos", () => {
  const eden = new EdenPage ();

  cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");

  cy.fixture("eden/espectaculos").then((fixture) => {
    fixture.Eventos.forEach((infoEvento, $index) => {
      eden.getShowCard().eq($index).scrollIntoView();
      eden.getShowName().eq($index).should("have.text", infoEvento.Nombre);
      eden.getShowImage().eq($index)

  });
    });
     });
  