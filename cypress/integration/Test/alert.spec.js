/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("Autocomplete cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();
        // Cypress automatically handle alert or popup and close it.
        // Cypress have capiblity to listen browser event
        // window.alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        });

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
});