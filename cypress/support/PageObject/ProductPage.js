class ProductPage {
    getCheckOutPrimaryLink() {
        return cy.get('#navbarResponsive .btn-primary');
    }
}

export default ProductPage;