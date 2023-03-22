
// SE REALIZAN PRUEBAS DE ont-info-service Nokia


// Prueba 1
///ltm/voip/{mac}
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio voip/{mac} Nokia", () => {
    it("Llamada a pantalla al servicio /ltm/voip/{mac}", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ltm/voip/B8E3B1754952",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/voipNk.json",Response.body);
      });
     });
  });


  //Prueba 2
  //ltm/wan/{mac}
  /// <reference types= "cypress" />
describe ("test de servicio ont info service servicio wan/{mac} Nokia", () => {
    it("Llamada a pantalla al servicio /ltm/wan/{mac}", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ltm/wan/B8E3B1754952",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/wanNk.json",Response.body);
      });
     });
  });

  //Prueba 3
 //ontInfo/getOntPower
  /// <reference types= "cypress" />
  describe ("test de servicio ont info service servicio /getOntPower Nokia", () => {
    it("Llamada a pantalla al servicio /ontInfo/getOntPower", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntPower?mac=F0686557F710",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntPowerNk.json",Response.body);
      });
     });
  });

    //Prueba 4
   //ontInfo/getOntSoftVersion
  /// <reference types= "cypress" />
  describe ("test de servicio ont info service servicio /getOntSoftVersion Nokia", () => {
    it("Llamada a pantalla al servicio /ontInfo/getOntSoftVersion", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntSoftVersion?mac=F0686557F710",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntSoftwareVersionNk.json",Response.body);
      });
     });
  });


      // Prueba 5
     //ontInfo/getOntStatusForSplitter
  /// <reference types= "cypress" />
  describe ("test de servicio ont info service servicio /getOntStatusForSplitter Nokia", () => {
    it("Llamada a pantalla al servicio /ontInfo/getOntStatusForSplitter", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntStatusForSplitter?acronimo=NCOR-R0002-016",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntStatusForSplitterNk.json",Response.body);
      });
     });
  });

      // Prueba 6
     //ontInfo/getOntTraffic
  /// <reference types= "cypress" />
  describe ("test de servicio ont info service", () => {
    it("Llamada a pantalla al servicio /ontInfo/getOntTraffic Nokia", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntTraffic?mac=9C713A64033F&interval=10&mediciones=1&iface=0",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntTrafficNk.json",Response.body);
      });
     });
  });

     //Prueba 7
    //ontInfo/getVLAN
  /// <reference types= "cypress" />
  describe ("test de servicio ont info service servicio /getVlan Nokia", () => {
    it("Llamada a pantalla al servicio /ontInfo/getVLAN", () => {
      cy.request({
        metod: "GET",
        url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getVLAN?mac=9C713A64033F",
      }).then((Response) => {
        expect(Response.status).to.eq(200);
        cy.log(JSON.stringify(Response));
        cy.writeFile("cypress/fixtures/Orion/ont-info-service/getVLANNk.json",Response.body);
      });
     });
  });



// SE REALIZAN PRUEBAS DE sgt-info-services Huawei


// Prueba 1
//ltm/voip/{mac}
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio voip/{mac} Huawei", () => {
  it("Llamada a pantalla al servicio /ltm/voip/{mac}", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ltm/voip/B8E3B1754952",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/voipHw.json",Response.body);
    });
   });
});


//Prueba 2
//ltm/wan/{mac}
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio wan/{mac} Huawei", () => {
  it("Llamada a pantalla al servicio /ltm/wan/{mac}", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ltm/wan/B8E3B1754952",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/wanHw.json",Response.body);
    });
   });
});

//Prueba 3
//ontInfo/getOntPower
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio /getOntPower Huawei", () => {
  it("Llamada a pantalla al servicio /ontInfo/getOntPower", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntPower?mac=9C713A64033F",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntPowerHw.json",Response.body);
    });
   });
});

  //Prueba 4
 //ontInfo/getOntSoftVersion
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio /getOntSoftVersion Huawei", () => {
  it("Llamada a pantalla al servicio /ontInfo/getOntSoftVersion", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntSoftVersion?mac=9C713A64033F",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntSoftwareVersionHw.json",Response.body);
    });
   });
});


    // Prueba 5
   //ontInfo/getOntStatusForSplitter
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio /getOntStatusForSplitter Huawei", () => {
  it("Llamada a pantalla al servicio /ontInfo/getOntStatusForSplitter", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntStatusForSplitter?acronimo=NCOR-R0002-016",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntStatusForSplitterHw.json",Response.body);
    });
   });
});

    // Prueba 6
   //ontInfo/getOntTraffic
/// <reference types= "cypress" />
describe ("test de servicio ont info service", () => {
  it("Llamada a pantalla al servicio /ontInfo/getOntTraffic Huawei", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getOntTraffic?mac=9C713A64033F&interval=10&mediciones=1&iface=0",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/getOntTrafficHw.json",Response.body);
    });
   });
});

   //Prueba 7
  //ontInfo/getVLAN
/// <reference types= "cypress" />
describe ("test de servicio ont info service servicio /getVlan Huawei", () => {
  it("Llamada a pantalla al servicio /ontInfo/getVLAN", () => {
    cy.request({
      metod: "GET",
      url: "https://ont-info-service-orion-ar-desa.apps.osen02.claro.amx/ontInfo/getVLAN?mac=9C713A64033F",
    }).then((Response) => {
      expect(Response.status).to.eq(200);
      cy.log(JSON.stringify(Response));
      cy.writeFile("cypress/fixtures/Orion/ont-info-service/getVLANHw.json",Response.body);
    });
   });
});