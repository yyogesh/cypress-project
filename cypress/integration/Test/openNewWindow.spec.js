/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("Autocomplete cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then((el) => {
            const url = el.prop('href');
            cy.visit(url); // URL should be in same domain CORS error will come for diff domain
        })
    })
});