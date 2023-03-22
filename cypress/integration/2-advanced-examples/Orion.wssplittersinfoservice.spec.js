// test cases de wssplittersinfoservice Produccion

// Prueba 1
// listarOlts
/// <reference types= "cypress" />
describe ("test de servicio listarOlts ar", () => {
    it("Llamada a pantalla al servicio listarOlts AR", () => {
      cy.request({
        metod: "GET",
        url: "https://wssplittersinfoservice-orion-ar.apps.osep02.claro.amx/orion/listarOlts",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/wsspliterinfoservice/listarOlts_ar.json",Response.body);
      });
     });
  });


// Prueba 2
// buscarSplittersIncremental
/// <reference types= "cypress" />
describe ("test de servicio buscarSplittersIncremental ar", () => {
    it("Llamada a pantalla al servicio buscarSplittersIncremental AR", () => {
      cy.request({
        metod: "GET",
        url: "https://wssplittersinfoservice-orion-ar.apps.osep02.claro.amx/orion/buscarSplittersIncremental?acronimo=NCOR-R0002-016",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/wsspliterinfoservice/buscarSplittersIncremental_ar.json",Response.body);
      });
     });
  });

// Prueba 3
// buscarSplittersPorNivel
/// <reference types= "cypress" />
describe ("test de servicio buscarSplittersPorNivel ar", () => {
    it("Llamada a pantalla al servicio buscarSplittersPorNivel AR", () => {
      cy.request({
        metod: "GET",
        url: "https://wssplittersinfoservice-orion-ar.apps.osep02.claro.amx/orion/buscarSplittersPorNivel?acronimo=NCOR-R0002-001",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/wsspliterinfoservice/buscarSplittersPorNivel_ar.json",Response.body);
      });
     });
  });

  // test cases de wssplittersinfoservice Paraguay

// Prueba 1
// listarOlts py
/// <reference types= "cypress" />
describe ("test de servicio listarOlts pais PY", () => {
    it("Llamada a pantalla al servicio listarOlts py", () => {
      cy.request({
        metod: "GET",
        url: "https://wssplittersinfoservice-orion-py.apps.osep02.claro.amx/orion/listarOlts",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/wsspliterinfoservice/listarOltsPy.json",Response.body);
      });
     });
  });

// Prueba 2
// buscarSplittersIncremental py
/// <reference types= "cypress" />
describe ("test de servicio buscarSplittersIncrementals PY", () => {
    it("Llamada a pantalla al servicio buscarSplittersIncremental py", () => {
      cy.request({
        metod: "GET",
        url: "https://wssplittersinfoservice-orion-py.apps.osep02.claro.amx/orion/buscarSplittersIncremental?acronimo=CX110-R0154-031",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/wsspliterinfoservice/buscarSplittersIncrementalPy.json",Response.body);
      });
     });
  });

// Prueba 3
// buscarSplittersPorNivel py
/// <reference types= "cypress" />
describe ("test de servicio buscarSplittersPorNivel PY", () => {
    it("Llamada a pantalla al servicio buscarSplittersPorNivel py", () => {
      cy.request({
        metod: "GET",
        url: "https://wssplittersinfoservice-orion-py.apps.osep02.claro.amx/orion/buscarSplittersPorNivel?acronimo=S1001-R0436-999",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/wsspliterinfoservice/buscarSplittersIncrementalPy.json",Response.body);
      });
     });
  });
