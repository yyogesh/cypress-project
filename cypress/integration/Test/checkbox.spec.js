/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("UI cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        // behaviour be. and comparision have.
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        // cy.get('input[type="checkbox"]').check(); // check all there checkbox
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    })
})