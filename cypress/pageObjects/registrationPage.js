import HomePage from "./homePage"
class RegistrationPage {
    constructor() {
        this.getNameField = () => cy.get('input[name="mb_id"]')
        this.getPasswordField = () => cy.get('input[name="mb_password"]')
        this.getConfirmPasswordField = () => cy.get('input[name="mb_password_re"]')
        this.getUsernameField = () => cy.get('input[name="mb_name"]')
        this.getNickNameField = () => cy.get('input[name="mb_nick"]')
        this.getEmailField = () => cy.get('input[name="mb_email"]')
        this.getPhoneNumberField = () => cy.get('input[name="mb_hp"]')
        this.getZipCodeField = () => cy.get('input[name="mb_zip"]')
        this.getAddressField = () => cy.get('input[name="mb_addr1"]')
    }

    acceptTerms() {
        cy.contains('button', '모두 동의').should('be.visible')
        cy.contains('button', '모두 동의').should('exist').click()
    }

    visitRegisterationPage() {
        HomePage.verifyLoginBtnIsVisible()
        HomePage.clickOnLoginBtn()
        cy.contains('a', '회원가입').should('be.visible')
        cy.contains('a', '회원가입').should('exist').click()
    }

    clickOnAgreeBtn() {
        cy.contains('button', '약관 동의').should('be.visible')
        cy.contains('button', '약관 동의').should('exist').click()
        cy.contains('h5', '사이트 이용정보 입력').should('be.visible')
    }

    inputName(name) {
        this.getNameField().type(name)
    }

    inputPassword(password) {
        this.getPasswordField().type(password)
    }

    inputConfirmPassword(confirmPassword) {
        this.getConfirmPasswordField().type(confirmPassword)
    }

    inputUsername(username) {
        this.getUsernameField().type(username)
        cy.contains('button','중복체크').should('be.visible')
        cy.contains('button','중복체크').click()
        cy.contains('button','확인').should('exist')
        cy.contains('button','확인').click()
    }

    inputNickname(nickname) {
        this.getNickNameField().type(nickname)
        cy.contains('button','중복체크').should('be.visible')
        cy.contains('button','중복체크').click()
        cy.contains('button','확인').should('exist')
        cy.contains('button','확인').click()
    }

    inputEmail(email) {
        this.getEmailField().type(email)
        cy.contains('button','중복체크').should('be.visible')
        cy.contains('button','중복체크').click()
        cy.contains('button','확인').should('exist')
        cy.contains('button','확인').click()
    }

    inputPhoneNumber(phoneNumber) {
        this.getPhoneNumberField().type(phoneNumber)
    }

    inputZip(zip) {
        this.getZipCodeField().type(zip)
    }

    inputAdddress(address) {
        this.getAddressField().type(address)
    }

    clickOnJoinMembershipBtn() {
        cy.contains('button', '회원가입').should('be.visible')
        cy.contains('button', '회원가입').should('exist').click()
        cy.contains('button', '확인').should('be.visible')
        cy.contains('button', '확인').should('exist').click()
    }

    clickOnProduct() {
        cy.contains('a', '[글로벌G] 알지쓰리 블랙라벨 (60ml x 10포 x 3박스) ').should('be.visible').click()
    }
}

export default new RegistrationPage()