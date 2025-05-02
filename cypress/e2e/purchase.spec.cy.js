import HomePage from '../pageObjects/homePage';
import LoginPage from '../pageObjects/loginPage';
import ProductListPage from '../pageObjects/productListPage';
import ProductDetailPage from '../pageObjects/productDetailPage';
import OrderNowPage from '../pageObjects/orderNowPage';
import loginData from "../fixtures/loginData.json"
import URLsData from "../fixtures/URLsData.json"
import orderFormData from "../fixtures/orderFormPage.json"

describe('Purchase Test', () => {

  beforeEach(() => {
    cy.visit(URLsData.visitUrl)
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

  it('Buy Product', () => {
    HomePage.verifyLoggedInUsername()
    HomePage.goToProductList()
    ProductListPage.verifyProductListPageHeading()
    ProductListPage.clickOnProduct()
    ProductDetailPage.clickOnBuyNowBtn()
    OrderNowPage.verifyOrderNowPage()
    OrderNowPage.clickOnSameAsOrdererRadioBtn()
    OrderNowPage.clickOnGetBankTransferBtn()
    OrderNowPage.selectRefundAcc(orderFormData.bankAccount)
    OrderNowPage.inputBankAccNumber(orderFormData.bankNumber)
    OrderNowPage.clickOnOrderNow()
  })

  afterEach(() => {
    HomePage.clickOnLoglogoutBtn()
    LoginPage.visitLoginPage(loginData.loginUrl)

  })
})