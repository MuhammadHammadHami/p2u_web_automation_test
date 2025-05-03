import BasePage from './basePage'
class LoginPage extends BasePage {
  constructor() {
    super()
    this.getUsernameField = () => cy.get('input[id="mb_id"]')
    this.getPasswordField = () => cy.get('input[id="mb_password"]')
    this.getLoginBtn = () => cy.get('button[id="form-submit1"]')
    this.getBackMenuBtn = () => cy.get('a[href="https://dev.p2u.kr"]')
  }

  verifyUsernameFieldIsVisible() {
    this.getUsernameField().should('be.visible')
  }

  inputUsername(username) {
    this.getUsernameField().type(username)
  }

  verifyPasswordFieldIsVisible() {
    this.getPasswordField().should('be.visible')
  }

  inputPassword(password) {
    this.getPasswordField().type(password)
  }

  verifyLoginBtndIsVisible() {
    this.getLoginBtn().should('be.visible')
  }

  clickOnLoginBtn() {
    this.getLoginBtn().should('exist')
    this.getLoginBtn().click()
  }

  visitLoginPage(loginUrl) {
    cy.visit(loginUrl)
  }
}

export default new LoginPage()
