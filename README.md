# POC Login Auth0 com Cypress

Projeto de exemplo para automatizar uma tela de login Auth0 usando Cypress com JavaScript.

## Requisitos

- Node.js instalado
- npm instalado
- Acesso ao usuario de teste do Auth0

## Instalar dependencias

Na raiz do projeto, execute:

```bash
npm install
```

## Configurar credenciais locais

Crie um arquivo chamado `cypress.env.json` na raiz do projeto.

Use o formato abaixo:

```json
{
  "auth0Email": "seu-email@empresa.com",
  "auth0Password": "sua-senha"
}
```

Esse arquivo nao deve ser enviado para o Git, pois contem dados sensiveis.
Ele ja esta listado no `.gitignore`.

## Abrir o Cypress

Para abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Depois selecione:

1. E2E Testing
2. O navegador desejado
3. O arquivo `login.cy.js`

## Rodar os testes em modo headless

Para executar os testes direto pelo terminal:

```bash
npm test
```

Ou:

```bash
npm run cy:run
```

## Estrutura principal

- `cypress/e2e/login.cy.js`: testes da tela de login
- `cypress/support/commands.js`: comando customizado para realizar login
- `cypress.config.js`: configuracao base do Cypress
- `cypress.env.json`: credenciais locais, ignorado pelo Git
- `cypress.env.example.json`: exemplo do formato esperado

## Praticas aplicadas

- O `baseUrl` aponta para a aplicacao principal: `https://eaglepro.dev.protege.com.br`.
- A URL do Auth0 fica no spec de login porque este teste valida especificamente o fluxo de autenticacao.
- As credenciais ficam fora do codigo, no arquivo local `cypress.env.json`.
- O comando customizado `cy.loginAuth0()` concentra apenas as acoes de preenchimento e envio do formulario.
- As assertivas ficam no arquivo de teste.
- O login com sucesso valida o redirecionamento para o Dashboard:

```text
https://eaglepro.dev.protege.com.br/gestao-mapa/dashboard/mapas-financeiros/
```

## Observacoes

A URL de login usada no teste contem parametros OAuth/OIDC, como `state`, `nonce` e `code_challenge`.
Se a tela nao carregar, pode ser necessario atualizar a URL no arquivo `cypress/e2e/login.cy.js`.

Caso o login exija MFA, captcha ou alguma validacao adicional do Auth0, o teste pode precisar de ajustes.
