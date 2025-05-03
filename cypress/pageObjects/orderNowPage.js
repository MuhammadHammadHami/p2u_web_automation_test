class OrderNowPage {
    constructor() {
        this.getOrderNowPage = () => cy.get('h2[class= "pull-left cart-page-title"]')
        this.getNameField = () => cy.get('input[name="od_name"]')
        this.getCellNumberField = () => cy.get('input[name="od_hp"]')
        this.getEmailField = () => cy.get('input[name="od_email"]')
        this.getPostalCodeField = () => cy.get('input[name="od_zip"]')
        this.getAddressField = () => cy.get('input[name="od_addr1"]')
        this.getSameAsOrderRadioBtn = () => cy.get('input[id="ad_sel_addr_same"]')
        this.getBankTransferBtn = () => cy.get('input[id="od_settle_card"]')
        this.getRefundAccountField = () => cy.get('select[id="od_bank"]')
        this.getBankAccNmber = () => cy.get('input[id="od_refund_bank"]')
        this.getOrderNowBtn = () => cy.get('input[id="orderButton"]')
        this.getOrderNowBtnBank = () => cy.get('input[class="btn_submit payment-button-bank"]')
        this.successModalCloseBtn = () => cy.get('button[id="modal-close"]')
    }

    verifyOrderNowPage() {
        this.getOrderNowPage().should('be.visible')
    }

    clickOnSameAsOrdererRadioBtn() {
        this.getSameAsOrderRadioBtn().click()
    }

    clickOnGetBankTransferBtn() {
        cy.contains('label', '무통장입금').should('be.visible').click()
    }

    selectRefundAcc(bankAccount) {
        this.getRefundAccountField().should('be.visible')
        this.getRefundAccountField().select(bankAccount)
        this.getRefundAccountField().should('have.value', bankAccount)
    }

    inputBankAccNumber(bankNumber) {
        this.getBankAccNmber().type(bankNumber)
    }

    clickOnOrderNow() {
        this.getOrderNowBtnBank().should('be.visible')
        this.getOrderNowBtnBank().click()
        cy.contains('h3', '모바일 지갑으로 QR 코드 전달').should('be.visible')
        this.successModalCloseBtn().click()
    }
}
export default new OrderNowPage()

