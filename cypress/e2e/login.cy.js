describe("Login Auth0", () => {
  const loginUrl =
    "/login?state=hKFo2SA1eVJpemVwVGxvdjVELXRseGdLcmpHOGxFMzFENnNXSaFupWxvZ2luo3RpZNkgVGhMaGsxSUIyRGl4S0xUTlp0enFHMVdmR0dISFR3Sk2jY2lk2SBwSkt3TFAzRUVQUFY5cTFWOEtJODNqRE9aWFhlTjdDMw&client=pJKwLP3EEPPV9q1V8KI83jDOZXXeN7C3&protocol=oauth2&scope=openid%20profile%20email%20offline_access&audience=https%3A%2F%2Feaglepro.dev.protege.com.br&redirect_uri=https%3A%2F%2Feaglepro.dev.protege.com.br%2Fsession%2Fcallback&response_type=code&code_challenge=6JG9wSYpytywXLs92kdmZpUZpMGzu9MnHSX0IizCneQ&code_challenge_method=S256&nonce=Km7vjNiSCfPL0SVDaCLyl0BDfaK2EFUJJ2LG_YOg59I";
  const campoEmail = 'input[name="username"], input[name="email"], input[type="email"]';
  const campoSenha = 'input[name="password"], input[type="password"]';
  const botaoEntrar = 'button[type="submit"], button[name="action"]';

  beforeEach(() => {
    cy.visit(loginUrl);
  });

  it("deve carregar a pagina de login com sucesso", () => {
    cy.get(campoEmail)
      .filter(":visible")
      .first()
      .should("be.visible")
      .and("be.enabled");
    cy.get(campoSenha)
      .filter(":visible")
      .first()
      .should("be.visible")
      .and("be.enabled");
    cy.get(botaoEntrar)
      .filter(":visible")
      .first()
      .should("be.visible")
      .and("be.enabled");
  });

  it("deve realizar login com sucesso", () => {
    cy.loginAuth0();

    cy.get(campoSenha, { timeout: 30000 }).should("not.exist");
  });
});
