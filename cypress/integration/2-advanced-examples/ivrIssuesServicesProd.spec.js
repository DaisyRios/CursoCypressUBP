// test cases de servicios de produccion IVR

// Prueba 1
// Plaza para traer los issues
/// <reference types= "cypress" />
describe ("test de servicio issues", () => {
    it("Llamada a pantalla al servicio issues AR", () => {
      cy.request({
        metod: "GET",
        url: "https://ivr-issues-services-orion-ar.apps.osep02.claro.amx/ivr/issues?status=1",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ivr-issues//ivr-issues.json",Response.body);
      });
     });
  });

  // Prueba 2
// Plaza para traer los issueReasons
/// <reference types= "cypress" />
describe ("test de servicio issueReasons", () => {
    it("Llamada a pantalla al servicio issues AR", () => {
      cy.request({
        metod: "GET",
        url: "https://ivr-issues-services-orion-ar.apps.osep02.claro.amx/ivr/issueReasons?countryId=1&status=1",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ivr-issues/ivr-issues-Reasons.json",Response.body);
      });
     });
  });

// Prueba 3
// Plaza para traer los issueTypes
/// <reference types= "cypress" />
describe ("test de servicio issueTypes", () => {
    it("Llamada a pantalla al servicio issues Types AR", () => {
      cy.request({
        metod: "GET",
        url: "https://ivr-issues-services-orion-ar.apps.osep02.claro.amx/ivr/issueTypes?countryId=1&status=1",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ivr-issues/ivr-issue-Types.json",Response.body);
      });
     });
  });

  // Prueba 4
// Plaza para traer los currentissuesData
/// <reference types= "cypress" />
describe ("test de servicio currentissuesData", () => {
    it("Llamada a pantalla al servicio currentissuesData AR", () => {
      cy.request({
        metod: "GET",
        url: "https://ivr-issues-services-orion-ar.apps.osep02.claro.amx/ivr/currentIssuesData/country/1/macAddres/9C713A64033F",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ivr-issues/ivr-currentissuesData.json",Response.body);
      });
     });
  });


// Prueba 5
// Plaza para traer los currentIssues
/// <reference types= "cypress" />
describe ("test de servicio currentIssues", () => {
    it("Llamada a pantalla al servicio currentIssues AR", () => {
      cy.request({
        metod: "GET",
        url: "https://ivr-issues-services-orion-ar.apps.osep02.claro.amx/ivr/currentIssues/country/1/oltName/NCOR01GP01/frame/0/slot/1/port/1",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ivr-issues/ivr-currentIssues.json",Response.body);
      });
     });
  });


