import Page from "./BasePage";


class Product extends Page {

    private readonly wholeSaleLabel: string
    private readonly addToCartBtn: string

    constructor() {
        super()
        this.wholeSaleLabel = '.wholesale_price_container'
        this.addToCartBtn = 'button[name="add-to-cart"]'
    }

   isWholeSaleVisible(isVisible: boolean) {
        let assertion = isVisible ? 'exist' : 'not.exist'
        cy.get(this.wholeSaleLabel)
            .should(assertion)
   }

   clickAddToCart() {
        cy.get(this.addToCartBtn)
            .should('be.enabled')
            .click()
   }

   getProductPagePrice() {
        cy.get(this.wholeSaleLabel)
            .invoke('text')
            .then((text) => {
                const productPrice = text.match(/₱(\d+)\.?\d*/)?.[1]; // Gets "30" from "₱30.00"
                cy.wrap(productPrice).as('productPrice');
            })
   }

   
}

export default new Product()