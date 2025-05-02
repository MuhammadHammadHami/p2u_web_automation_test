class ProductListPagee {
    constructor() {
        this.getProductlistPageHeading = () => cy.get('h2[class="pull-left cart-page-title"]')
    }

    verifyProductListPageHeading() {
        this.getProductlistPageHeading().should('be.visible')
    }

    clickOnProduct() {
        cy.contains('a', '[글로벌G] 알지쓰리 블랙라벨 (60ml x 10포 x 3박스) ').should('be.visible').click()
    }
}

export default new ProductListPagee()