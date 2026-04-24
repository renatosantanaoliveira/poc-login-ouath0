// Testes de login via Auth0
// Fluxo: aplicação → Auth0 (cy.origin) → redirecionamento de volta

describe("Login com Auth0", () => {
  beforeEach(() => {
    // Realiza login e cacheia a sessão com cy.session (via comando customizado)
    cy.loginAuth0();

    // Após restaurar a sessão, acessa a página inicial da aplicação
    // ALTERE AQUI: troque "/" pela rota protegida desejada, se necessário
    cy.visit("/");
  });

  it("deve fazer login com sucesso e exibir a tela principal", () => {
    // Verifica que um elemento visível após o login está presente na tela
    // ALTERE AQUI: ajuste o seletor SELECTOR_POST_LOGIN no cypress.env.json
    cy.get(Cypress.env("SELECTOR_POST_LOGIN")).should("be.visible");
  });
});
