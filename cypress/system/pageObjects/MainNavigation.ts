

export default class MainNavigation {

    private readonly _shop: string
    private readonly _cartIcon: string
    private readonly _myAccountIcon: string

    constructor() {
        this._myAccountIcon = '[data-block-name="woocommerce/customer-account"]'
        this._cartIcon = '[data-block-name="woocommerce/mini-cart"]'
        this._shop = 'a[href$="/shop/"]'
    }

    myAccountIcon() {
        return this._myAccountIcon
    }

    cartIcon() {
        return this._cartIcon
    }

    shop() {
        return this._shop
    }
}