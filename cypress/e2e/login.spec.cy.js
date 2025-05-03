import HomePage from '../pageObjects/homePage';
import LoginPage from '../pageObjects/loginPage';
import loginData from "../fixtures/loginData.json"
import BasePage from "../pageObjects/basePage"

const basePage = new BasePage()

describe('Login Test', () => {
  basePage.setUpHooks()
  it('Should login successfully with valid credentials', () => {
    HomePage.verifyLoginBtnIsVisible()
    HomePage.clickOnLoginBtn()
    LoginPage.verifyUsernameFieldIsVisible()
    LoginPage.inputUsername(loginData.validUser.username)
    LoginPage.verifyPasswordFieldIsVisible()
    LoginPage.inputPassword(loginData.validUser.password)
    LoginPage.verifyLoginBtndIsVisible()
    LoginPage.clickOnLoginBtn()
    HomePage.verifyLoggedInUsername()
  })
})