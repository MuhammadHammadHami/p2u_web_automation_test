import URLsData from "./../fixtures/URLsData.json"
class BasePage {


  setUpHooks() {
    // Hook to run before all tests
    before(() => {
      cy.log('Test Suite Starting...')
    })

    // Hook to run before each test
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.log('Test Starting...')
      cy.visit(URLsData.visitUrl)
    })

    // Hook to run after each test
    afterEach(() => {
      // if (Cypress.currentTest.state === 'failed') {
      //   cy.screenshot(); // Take a screenshot if a test fails
      // }
      cy.log('Test Finished...')
    })

    // Hook to run after all tests
    after(() => {
      cy.log('Test Suite Finished...')
    })

  }

  // Method to visit a page (relative URL)
  visit(path = '') {
    cy.visit(path)  // baseUrl is automatically prefixed by Cypress
  }

  // Method to get an element
  getElement(selector) {
    return cy.get(selector)
  }

  // Method to click an element
  clickElement(selector) {
    this.getElement(selector).click();
  }

  // Method to type into an input field
  typeIntoField(selector, text) {
    this.getElement(selector).type(text)
  }

  // Method to validate if an element contains specific text
  validateText(selector, text) {
    this.getElement(selector).should('contain.text', text)
  }
}

export default BasePage;
