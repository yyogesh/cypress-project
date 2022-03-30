/// <reference types="Cypress" />
import HomePage from '../PageObject/HomePage';
import ProductPage from '../PageObject/ProductPage';

describe("Basic of cypress", () => {
    let data = {}
    before(() => {
        cy.fixture("form").then(function (res) {
            data = res;
        })
    })

    it("Table cypress test", () => {
        const homePage = new HomePage();
        const productPage = new ProductPage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        // cy.get("form input[name='name']").type(data.name);
        // cy.get('select').select(data.gender);
        // cy.get("h4 input[name='name']").should('have.value', data.name);
        // cy.get("form input[name='name']").should('have.attr', 'minlength', '2');
        // cy.get('#inlineRadio3').should('be.disabled');
        // cy.contains('Shop').click();
        homePage.getNameInput().type(data.name);
        homePage.getGenderSelect().select(data.gender);
        homePage.getTwoWayNameInput().should('have.value', data.name);
        homePage.getNameInput().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaurOption().should('be.disabled');
        homePage.getShopTab().click();
        // move below section to cypress\support\commands.js to make custom command

        // cy.get('h4.card-title').each(($el, index, $list) => {
        //     if ($el.text().includes('Blackberry')) {
        //         cy.get('button.btn.btn-info').eq(index).click();
        //     }
        // })
        // cy.selectProduct('Blackberry');
        // cy.selectProduct('Nokia Edge');

        data.productName.forEach(product => {
            cy.selectProduct(product);
        });

        productPage.getCheckOutPrimaryLink().click()
    });
});