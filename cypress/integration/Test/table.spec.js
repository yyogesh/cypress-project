/// <reference types="Cypress" />

describe("Basic of cypress", () => {
    it("Table cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    expect(price.text()).to.equal('25')
                });
            }
        })
    });
});