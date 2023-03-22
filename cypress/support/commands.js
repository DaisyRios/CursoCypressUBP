//* Le paso una validacion de esquemas del JSON

const Ajv = require("ajv")
const ajv = new Ajv()  

/**
* Llama al servicio acorde al primer parametro enciado
* @method callService
* @param {string} lastUrl - ULTIMA PARTE DEL ENDPOINT QUE SE CONCATENARA CON EL RESTO
* @param {string} fileName - Nombre del archivo de salida
 */
Cypress.Commands.add('callService', (lastUrl, fileName, schema = false) => {
    cy.request({
        method: "GET",
        url: "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/" + lastUrl,
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response));
        cy.writeFile("cypress/fixtures/eden/"+fileName+".json", response.body);


        if (!schema) {
        cy.log("No hay validacion de esquema");
        } else {
        cy.fixture("schemas/" + schema).then((JsonFile) => {
        const validate = ajv.compile(JsonFile);
        const valid = validate(response.body);
        if (!valid) {
        cy.log("Hay un error en el esquema");
        } else {
        cy.log("El esquema esta bien");
       }
       });
    }
    });   
    });     
