import Page from "./BasePage";


class CartDrawer extends Page {

    private readonly productContainer: string;

    constructor() {
        super()
        this.productContainer = 'table.wc-block-cart-items'
    }

    doPricesMatch() {
        super.clickCartIcon()
        cy.get('@productPrice')
            .then((text) => {
                cy.log("texxt: " + text)
                cy.get(this.productContainer)
                    .contains('Flat tops')
                    .parent()
                    .should('contain.text', '35')
            })
    }
   
}

export default new CartDrawer()