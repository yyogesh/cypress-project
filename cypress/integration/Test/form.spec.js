/// <reference types="Cypress" />

describe("Basic of cypress", () => {
    let data = {}
    before(() => {
        cy.fixture("form").then(function (res) {
            data = res;
        })
    })

    it("Table cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get("form input[name='name']").type(data.name);
        cy.get('select').select(data.gender);
        cy.get("h4 input[name='name']").should('have.value', data.name);
        cy.get("form input[name='name']").should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.contains('Shop').click();
        // move below section to cypress\support\commands.js to make custom command
        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if ($el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click();
        //     }
        // })
        cy.selectProduct('Blackberry');
    });
});