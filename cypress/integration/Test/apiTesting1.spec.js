/// <reference types="Cypress" />
describe("Api Testing", () => {
    it("API cypress test", () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
                req.continue(res => {
                    expect(res.statusCode).to.equal(200);
                });
            }).as('dummyURL');
        cy.get('.btn-primary').click();
        cy.wait('@dummyURL');
    })
});