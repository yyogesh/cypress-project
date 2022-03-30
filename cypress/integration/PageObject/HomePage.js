class HomePage {
    getNameInput() {
        return cy.get("form input[name='name']")
    }

    getTwoWayNameInput() {
        return cy.get("h4 input[name='name']")
    }

    getGenderSelect() {
        return cy.get('select')
    }

    getEntrepreneaurOption() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.contains('Shop');
    }
}

export default HomePage;