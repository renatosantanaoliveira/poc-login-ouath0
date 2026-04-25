Cypress.Commands.add("loginAuth0", () => {
  const email = Cypress.env("auth0Email");
  const password = Cypress.env("auth0Password");

  if (!email || !password) {
    throw new Error(
      "Informe auth0Email e auth0Password no arquivo cypress.env.json para executar o login.",
    );
  }

  cy.get('input[name="username"], input[name="email"], input[type="email"]')
    .filter(":visible")
    .first()
    .clear()
    .type(email, { log: false });

  cy.get('input[name="password"], input[type="password"]')
    .filter(":visible")
    .first()
    .clear()
    .type(password, { log: false });

  cy.get('button[type="submit"], button[name="action"]')
    .filter(":visible")
    .first()
    .click();
});
