/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("Dropdon cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select').select('option2').should('have.value', 'option2');
    })
})