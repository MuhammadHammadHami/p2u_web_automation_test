const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.p2u.kr/',  // Define base URL for p2u
    defaultCommandTimeout: 10000, // 10 seconds
    pageLoadTimeout: 60000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    supportFile: 'cypress/support/index.js',  // Path to support file
    specPattern: 'cypress/e2e/**/*.spec.cy.js',  // Pattern for test files
    supportFile: 'cypress/support/e2e.js', 

  },


})
