# POC — Login Automatizado com Cypress 15 + Auth0

## Pré-requisitos

- Node.js 18+
- npm

---

## 1. Instalar dependências

```bash
npm install
```

---

## 2. Configurar as variáveis

Abra o arquivo `cypress.env.json` e preencha cada valor:

| Variável | O que colocar |
|---|---|
| `AUTH0_LOGIN_URL` | URL completa com `?state=` fixo |
| `AUTH0_USERNAME` | E-mail de login |
| `AUTH0_PASSWORD` | Senha |
| `SELECTOR_USERNAME` | Seletor do campo e-mail na tela Auth0 |
| `SELECTOR_PASSWORD` | Seletor do campo senha na tela Auth0 |
| `SELECTOR_SUBMIT` | Seletor do botão de entrar |
| `SELECTOR_POST_LOGIN` | Seletor de elemento visível após o login |

Abra também o `cypress.config.js` e altere o `baseUrl` para a URL da sua aplicação.

> **Atenção:** `cypress.env.json` está no `.gitignore` e **não deve ser versionado**, pois contém credenciais.

---

## 3. Rodar os testes

**Modo headless (CI/terminal):**
```bash
npm test
```

**Modo interativo (abre o Cypress):**
```bash
npm run test:open
```

---

## Como funciona

1. `cy.loginAuth0()` visita a URL do Auth0 com o `?state` fixo
2. `cy.origin()` interage com o formulário de login no domínio `auth0.com`
3. Após autenticar, o Auth0 redireciona de volta para a aplicação
4. `cy.session()` cacheia os cookies/tokens — o login é feito só uma vez por sessão
5. O teste verifica que o elemento pós-login está visível
