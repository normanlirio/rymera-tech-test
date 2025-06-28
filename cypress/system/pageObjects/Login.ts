import Page from "./BasePage";


class Login extends Page {

    private readonly username: string
    private readonly password: string
    private readonly loginBtn: string

    constructor() {
        super()
        this.username = '#username'
        this.password = '#password'
        this.loginBtn = 'button[type="submit"]'
    }

    open(url: string): void {
        super.open(url)
    }

    typeUsername(username: string) {
        cy.get(this.username)
            .should('be.visible')
            .type(username)
        return this
    }

    typePassword(password: string) {
        cy.get(this.password)
            .should('be.visible')
            .type(password)
        return this
    }

    clickLogin() {
        cy.get(this.loginBtn)
            .should('be.enabled')
            .contains('Log in')
            .click()
        return this
    }

    login(username: string, password: string) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }
}

export default new Login()