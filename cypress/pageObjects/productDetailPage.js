class ProductDetailPage {
    constructor() {

        this.getProductColorDrropdown = () => cy.get('select[id="it_option_1"]')
        this.getBuyNowBtn = () => cy.get('button[id="sit_btn_buy"]')
        this.getProductHeading = () => cy.get('h2[class="pull-left cart-page-title"]')
    }

    selectProductColor() {
        this.getProductColorDrropdown().should('be.visible')
        this.getProductColorDrropdown().select('블랙,0,9998')
    }

    verifyProductPageHeading() {
        this.getProductHeading().should('be.visible')
    }

    clickOnBuyNowBtn() {
        this.getBuyNowBtn().should('be.visible')
        this.getBuyNowBtn().click()
    }
}
export default new ProductDetailPage()