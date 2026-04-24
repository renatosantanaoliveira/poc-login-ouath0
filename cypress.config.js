const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Necessário para permitir cy.origin() com domínios cruzados (Auth0)
  // Deve ficar no nível raiz — não dentro de e2e: {}
  chromeWebSecurity: false,

  e2e: {
    // ALTERE AQUI: URL base da sua aplicação (após o redirecionamento do Auth0)
    baseUrl: "https://minha-aplicacao.com",

    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      // Sem eventos customizados por enquanto
    },
  },
});
