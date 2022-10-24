/// <reference types="cypress" />
//Se llama a los pages
import EdenPage from "../pages/eden.js";

//Descripcion
describe("Test de Página Eden", () => {
  it("Llamada a servicio: /inicio", { tags: ["@regression", "@smoke"] }, () => {
    cy.callService("inicio", "espectaculos");
  });

  it("Llamada a servicio: /puntosdeventas", () => {
    cy.callService(
      "puntosdeventas",
      "puntosdeventas",
      "puntosdeventa_sch.json"
    );
  });

  it("Verificar las cards de los espectáculos", { tags: "@regression" }, () => {
    const eden = new EdenPage();

    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");

    cy.fixture("eden/espectaculos").then((fixture) => {
      fixture.Eventos.forEach((infoEvento, $index) => {
        if ($index < 6) {
          eden.getShowCard().eq($index).scrollIntoView();
          eden
            .getShowCard()
            .eq($index)
            .matchImageSnapshot("Show_" + $index);
          eden.getShowName().eq($index).should("have.text", infoEvento.Nombre);
          cy.wait(5);
          eden
            .getShowImage()
            .eq($index)
            .should("have.attr", "src", infoEvento.Imagen);
          eden.getShowImage().eq($index).trigger("mouseover");
          eden
            .getShowDate()
            .should("be.visible")
            .and("contain.text", infoEvento.Fecha)
            .and("contain.text", infoEvento.Lugar);
          eden
            .getShowDate()
            .should("have.css", "background-color", "rgba(23, 57, 100, 0.99)");
        }
      });
    });
  });
});
