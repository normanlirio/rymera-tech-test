import Page from "./BasePage";


class Shop extends Page {

    private readonly searchField: string
    private readonly searchBtn: string

    constructor() {
        super()
        this.searchField = 'form[role="search"] input[placeholder="Search"]'
        this.searchBtn = 'form[role="search"] button'
    }

   searchProduct(product: string) {
        cy.get(this.searchField)
            .type(product)
        cy.get(this.searchBtn)
            .should('be.enabled')
            .click()
   }
}

export default new Shop()