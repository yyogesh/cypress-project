/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("Autocomplete cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[value="radio2"]').check().should('be.checked');
    })
});