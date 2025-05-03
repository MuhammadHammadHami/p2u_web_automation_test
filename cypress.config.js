const { defineConfig } = require("cypress");
const urlData = require("./cypress/fixtures/urlData.json")

module.exports = defineConfig({
  e2e: {
    baseUrl: urlData.baseUrl,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    supportFile: 'cypress/support/index.js',  
    specPattern: 'cypress/e2e/**/*.spec.cy.js', 
    supportFile: 'cypress/support/e2e.js',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: true,
      html: true,
      json: true
    }
  },
})
