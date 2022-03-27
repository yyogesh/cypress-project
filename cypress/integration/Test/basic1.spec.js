/// <reference types="Cypress" />
describe("Basic of cypress", () => {
    it("Second cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click(); // before cypress 7 it was working
                // $el is promise it need to resolve so wrap it
                //Yield the object passed into .wrap(). If the object is a promise, yield its resolved value.
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})