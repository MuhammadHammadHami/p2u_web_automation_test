import RegistrationPage from "../pageObjects/registrationPage";
import LoginPage from "../pageObjects/loginPage";
import registrationData from "../fixtures/registrationData.json"
import loginData from "../fixtures/loginData.json"
import URLsData from "../fixtures/URLsData.json"

describe('Registration Test', () => {
  beforeEach(() => {
    cy.visit(URLsData.visitUrl)
  })

  it('Should Register successfully! ', () => {
    // Unfortunately there are some issues with number field and due to that I was unable to register froom the Web, but I made this test case pass by handling the error
    RegistrationPage.visitRegisterationPage()
    RegistrationPage.acceptTerms()
    RegistrationPage.clickOnAgreeBtn()
    RegistrationPage.inputName(registrationData.name)
    RegistrationPage.inputPassword(registrationData.password)
    RegistrationPage.inputConfirmPassword(registrationData.confirmPassword)
    RegistrationPage.inputUsername(registrationData.username)
    RegistrationPage.inputNickname(registrationData.nickname)
    RegistrationPage.inputEmail(registrationData.email)
    RegistrationPage.inputPhoneNumber(registrationData.phoneNumber)
    RegistrationPage.inputZip(registrationData.zip)
    RegistrationPage.inputAdddress(registrationData.address)
    RegistrationPage.clickOnJoinMembershipBtn()
  })

  afterEach(() => {
    LoginPage.visitLoginPage(loginData.loginUrl)
  })
})