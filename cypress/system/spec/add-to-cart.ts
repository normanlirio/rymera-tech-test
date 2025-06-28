import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import Login from '../pageObjects/Login'
import Shop from '../pageObjects/Shop'
import Product from '../pageObjects/Product'
import { getUserCredentials } from '../helper/Helper'
import CartDrawer from '../pageObjects/CartDrawer'


Given('I login with {string} credentials', (userType: string) => {
    Login.open('my-account/')
    const credentials = getUserCredentials(userType)
    Login.login(credentials.username, credentials.password)
 })

 Given('the customer is on the Shop page', () => {
    Login.clickShopLink()
 })

When('the customer searches for the {string}', (item: string) => {
    Shop.searchProduct('Flat Tops')
})

When('clicks the add to cart button', (item: string) => {
    Product.clickAddToCart()
})

Then('the price should match in the Shop and Cart', () => {
    Product.getProductPagePrice()
    CartDrawer.doPricesMatch()
})
