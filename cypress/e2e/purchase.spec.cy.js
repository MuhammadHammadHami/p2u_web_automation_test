import HomePage from '../pageObjects/homePage';
import LoginPage from '../pageObjects/loginPage';
import ProductListPage from '../pageObjects/productListPage';
import ProductDetailPage from '../pageObjects/productDetailPage';
import OrderNowPage from '../pageObjects/orderNowPage';
import loginData from "../fixtures/loginData.json"
import orderFormData from "../fixtures/orderFormPage.json"
import BasePage from "../pageObjects/basePage"
import urlData from "../fixtures/urlData.json"

const basePage = new BasePage()

describe('Purchase Test', () => {
  basePage.setUpHooks()
  it('Buy Product', () => {
    HomePage.verifyLoginBtnIsVisible()
    HomePage.clickOnLoginBtn()
    LoginPage.verifyUsernameFieldIsVisible()
    LoginPage.inputUsername(loginData.validUser.username)
    LoginPage.verifyPasswordFieldIsVisible()
    LoginPage.inputPassword(loginData.validUser.password)
    LoginPage.verifyLoginBtndIsVisible()
    LoginPage.clickOnLoginBtn()
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
    HomePage.clickOnLoglogoutBtn()
    LoginPage.visitLoginPage(urlData.loginUrl)
  })
})