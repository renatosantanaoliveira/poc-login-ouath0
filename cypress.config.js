const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://dev-protege.us.auth0.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1366,
    viewportHeight: 768,
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
