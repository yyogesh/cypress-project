/// <reference types="Cypress" />

describe("Basic of cypress", () => {
    it("MouseHover cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('.mouse-hover-content').invoke('show');
        // cy.contains('Top').click();
        // cy.url().should('include', 'top');
        // or we cn write it like:
        cy.contains('Top').click({ force: true });
        cy.url().should('include', 'top');
    });
});