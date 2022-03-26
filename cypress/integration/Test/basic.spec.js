/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("First cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products .product').should('have.length', 4);
        cy.get('.product:visible').should('have.length', 4);
    })
})