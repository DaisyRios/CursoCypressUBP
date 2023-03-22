
// test cases de sgt-info-services con cliente Huawei

// Prueba 1
// onData/getONTInfraForSplitter 
/// <reference types= "cypress" />
describe ("test de servicio sgt-info-services servicio getONTInfraForSplitter Huawei", () => {
    it("Llamada a pantalla al servicio /onData/getONTInfraForSplitter{acronimo}", () => {
      cy.request({
        metod: "GET",
        url: " https://sgt-services-orion-ar-desa.apps.osen02.claro.amx/ontData/getONTInfraForSplitter?acronimo=GFLR-R4838-004",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/sgt-info-service/getONTInfraForSplitterHw.json",Response.body);
      });
     });
  });


  //Prueba 2
  // onData/getOntIdsFromInfra
  /// <reference types= "cypress" />
describe ("test de servicio sgt-info-servicese servicio /getOntIdsFromInfra Huawei", () => {
    it("Llamada a pantalla al servicio /getOntIdsFromInfra", () => {
      cy.request({
        metod: "GET",
        url: "https://sgt-services-orion-ar-desa.apps.osen02.claro.amx/ontData/getOntIdsFromInfra?frame=0&oltName=VLFN01GP02&port=1&slot=1",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/sgt-info-service/getOntIdsFromInfrahw.json",Response.body);
      });
     });
  });

  //Prueba 3
 // onData/getONTInfraInfo
  /// <reference types= "cypress" />
  describe ("test de servicio sgt-info-services servicio /getONTInfraInfo Huawei", () => {
    it("Llamada a pantalla al servicio /getONTInfraInfo", () => {
      cy.request({
        metod: "GET",
        url: "https://sgt-services-orion-ar-desa.apps.osen02.claro.amx/ontData/getONTInfraInfo?mac=14579FBA2B4B",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/sgt-info-service/getONTInfraInfoHw.json",Response.body);
      });
     });
  });

// test cases de sgt-info-services con cliente Nokia

// Prueba 1
// onData/getONTInfraForSplitter 
/// <reference types= "cypress" />
describe ("test de servicio sgt-info-services servicio getONTInfraForSplitter Nokia", () => {
  it("Llamada a pantalla al servicio /onData/getONTInfraForSplitter{acronimo}", () => {
    cy.request({
      metod: "GET",
      url: "https://sgt-services-orion-ar.apps.osep02.claro.amx/ontData/getONTInfraForSplitter?acronimo=JU030-R0110-012",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/sgt-info-service/getONTInfraForSplitterNk.json",Response.body);
    });
   });
});


//Prueba 2
// onData/getOntIdsFromInfra
/// <reference types= "cypress" />
describe ("test de servicio sgt-info-servicese servicio /getOntIdsFromInfra Nokia", () => {
  it("Llamada a pantalla al servicio /getOntIdsFromInfra", () => {
    cy.request({
      metod: "GET",
      url: "https://sgt-services-orion-ar.apps.osep02.claro.amx/ontData/getOntIdsFromInfra?frame=1&oltName=JU030-GP-01&port=4&slot=2",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/sgt-info-service/getOntIdsFromInfraNk.json",Response.body);
    });
   });
});

//Prueba 3
// onData/getONTInfraInfo
/// <reference types= "cypress" />
describe ("test de servicio sgt-info-services servicio /getONTInfraInfo Nokia", () => {
  it("Llamada a pantalla al servicio /getONTInfraInfo", () => {
    cy.request({
      metod: "GET",
      url: "https://sgt-services-orion-ar.apps.osep02.claro.amx/ontData/getONTInfraInfo?mac=F06865567AC0",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/sgt-info-service/getONTInfraInfoNk.json",Response.body);
    });
   });
});
