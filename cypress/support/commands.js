// Comando customizado: cy.loginAuth0()
// Usa cy.session() para cachear a sessão e evitar login repetido a cada teste

Cypress.Commands.add("loginAuth0", () => {
  const loginUrl = Cypress.env("AUTH0_LOGIN_URL");
  const username = Cypress.env("AUTH0_USERNAME");
  const password = Cypress.env("AUTH0_PASSWORD");

  // ALTERE AQUI: ajuste os seletores no cypress.env.json se necessário
  const selectorUsername = Cypress.env("SELECTOR_USERNAME");
  const selectorPassword = Cypress.env("SELECTOR_PASSWORD");
  const selectorSubmit = Cypress.env("SELECTOR_SUBMIT");

  cy.session(
    // Chave de cache da sessão — pode ser o e-mail do usuário
    username,
    () => {
      // Acessa a URL do Auth0 com o state fixo
      cy.visit(loginUrl);

      // cy.origin() é obrigatório para interagir com domínio externo (Auth0)
      cy.origin(
        "https://dev-protege.us.auth0.com", // ALTERE AQUI se o domínio Auth0 mudar
        { args: { username, password, selectorUsername, selectorPassword, selectorSubmit } },
        ({ username, password, selectorUsername, selectorPassword, selectorSubmit }) => {
          // Preenche e-mail
          cy.get(selectorUsername).type(username);

          // Preenche senha
          cy.get(selectorPassword).type(password, { log: false });

          // Clica em entrar
          cy.get(selectorSubmit).click();
        }
      );

      // Aguarda redirecionamento de volta para a aplicação
      // ALTERE AQUI: troque pelo seletor de um elemento que aparece após o login
      cy.get(Cypress.env("SELECTOR_POST_LOGIN"), { timeout: 15000 }).should("be.visible");
    },
    {
      // Valida que a sessão cacheada ainda é válida antes de reutilizá-la.
      // cy.session() restaura cookies mas NÃO restaura a URL, por isso o cy.visit()
      // é obrigatório aqui — sem ele, o browser fica em branco e o elemento nunca é encontrado.
      validate() {
        cy.visit("/");
        cy.get(Cypress.env("SELECTOR_POST_LOGIN")).should("be.visible");
      },
    }
  );
});
