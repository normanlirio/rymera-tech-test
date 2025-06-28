import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import Login from '../pageObjects/Login'
import Shop from '../pageObjects/Shop'
import Product from '../pageObjects/Product'
import { getUserCredentials } from '../helper/Helper'

Given('I am on login page', () => {
   Login.open('my-account/')
})

When('I log in with {string} credentials', (userType: string) => {
    const credentials = getUserCredentials(userType)
    Login.login(credentials.username, credentials.password)
})

Then('I should see the wholesale price in the product page', () => {
    Login.clickShopLink()
    Shop.searchProduct('Flat Tops')
    Product.isWholeSaleVisible(true)
})


Then('I should not see the wholesale price in the product page', () => {
    Login.clickShopLink()
    Shop.searchProduct('Flat Tops')
    Product.isWholeSaleVisible(false)
})
