import BasePage from "./basePage"

class HomePage extends BasePage {
    constructor() {
        super()
        this.getLoggedInUsername = () => cy.get('span[id="user_name"]')
    }

    verifyLoggedInUsername() {
        this.getLoggedInUsername().should('be.visible')
    }

    goToProductList() {
        cy.contains('a', '히트상품').should('be.visible').click()
    }

    verifyLoginBtnIsVisible() {
        cy.contains('a', '로그인').should('be.visible')
    }

    clickOnLoginBtn() {
        cy.contains('a', '로그인').click()
    }

    clickOnLoglogoutBtn() {
        cy.contains('a', '로그아웃').click()
    }
}
export default new HomePage()