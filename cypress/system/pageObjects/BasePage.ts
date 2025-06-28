import MainNavigation from "./MainNavigation"


export default class Page {
    
    private mainNav: MainNavigation

    constructor() {
        this.mainNav = new MainNavigation()
    }

    open(url: string) {
        cy.visit(`http://localhost/wp/wordpress/${url}`)
    }

    clickMyAccountIcon() {
        cy.get(this.mainNav.myAccountIcon())
            .should('be.visible')
            .click()
    }

    clickCartIcon() {
        cy.get(this.mainNav.cartIcon())
            .should('be.visible')
            .click()
    }

    clickShopLink() {
        cy.get(this.mainNav.shop())
            .contains('Shop')
            .should('be.visible')
            .click()
    }
}