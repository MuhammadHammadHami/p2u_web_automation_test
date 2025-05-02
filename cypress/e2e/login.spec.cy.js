import HomePage from '../pageObjects/homePage';
import LoginPage from '../pageObjects/loginPage';
import URLsData from "../fixtures/URLsData.json"
import loginData from "../fixtures/loginData.json"

describe('Login Test', () => {

  beforeEach(() => {
    cy.visit(URLsData.visitUrl)
  })

  it('Should login successfully with valid credentials', () => {
    HomePage.verifyLoginBtnIsVisible()
    HomePage.clickOnLoginBtn()

    // Access test data for valid user
    LoginPage.verifyUsernameFieldIsVisible()
    LoginPage.inputUsername(loginData.validUser.username)
    LoginPage.verifyPasswordFieldIsVisible()
    LoginPage.inputPassword(loginData.validUser.password)
    LoginPage.verifyLoginBtndIsVisible()
    LoginPage.clickOnLoginBtn()
    HomePage.verifyLoggedInUsername()
  })

  afterEach(() => {
    HomePage.clickOnLoglogoutBtn()
    LoginPage.visitLoginPage(loginData.loginUrl)
  })
})