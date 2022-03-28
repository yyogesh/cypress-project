/// <reference types="Cypress" />


describe("Basic of cypress", () => {
    it("SwitchTab cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // Cypress have ability to manipulate the dom
        // Cypress open a new page only in current tab
        cy.get('#opentab').invoke('removeAttr', 'target');
        cy.get('#opentab').click();
        cy.url().should('include', 'rahulshettyacademy');
        cy.go('back');
        cy.url().should('include', 'AutomationPractice');
    });
});