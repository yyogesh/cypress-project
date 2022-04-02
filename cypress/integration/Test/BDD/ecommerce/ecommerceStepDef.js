import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/PageObject/HomePage';
import ProductPage from '../../../../support/PageObject/ProductPage';

let data = {};
Before(function () {
    cy.fixture("form").then(function (res) {
        data = res;
    })
})

const homePage = new HomePage();
const productPage = new ProductPage();
Given('Open ecommerce page', () => {
    cy.visit(Cypress.env('url'));
})

When('I add items to cart', () => {
    homePage.getShopTab().click();
    data.productName.forEach(product => {
        cy.selectProduct(product);
    });
    productPage.getCheckOutPrimaryLink().click();
})

And('Validate the total prices', () => {
    let amount = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        cy.log($el.text())
        amount += +$el.text().match(/\d+/)[0]
    });
    cy.get('.text-right strong').then(response => {
        const totalAmount = +response.text().match(/\d+/)[0];
        expect(totalAmount).to.equal(amount);
    })
});

Then('Select the country submit and verify Thankyou', () => {
    cy.contains('Checkout').click();
    cy.get('#country').type('india');
    // Cypress.config('defaultCommandTimeout', 8000);
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get('input[type="submit"]').click();
    // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
        const actualText = element.text();
        expect(actualText.includes('Success')).to.be.true;
        // if(actualText.includes('Success')) {
        // }
    })
})