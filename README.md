
# Teste de Automação - Desafio API

Esse é o repositório do Teste de Automação, Desafio API, para o processo seletivo para a vaga de Quality Engineer do Plard, Santander.

O método da requisição é GET e a url é https://api.trello.com/1/actions/592f11060f95a3d3d46a987a


## Instalação

Após clonar o repositório, instale o projeto com npm

```bash
  git clone https://github.com/lucasajajpiccoli/teste-de-automacao-api.git
  cd teste-de-automacao-api
  npm install
```


## Rodando o teste

Para rodar o teste, que valida se o cartão do Trello tem a variável do campo name do objeto list esperado bem como se a resposta tem status code esperado, basta rodar

```bash
  npm run test
```

## Executando a requisição

Para executar a requisição GET para o cartão do Trello e visualizar o valor do campo name do objeto list bem como o status code da resposta, basta rodar

```bash
  node index.js
```

## Arquivos

### Funcionalidade

A funcionalidade em Gherkin se encontra no caminho

```bash
  ./features/LerCartaTrello.feature
```

### Step Definitions

A step definition que implementa a funcionalidade se encontra em

```bash
  ./features/step_definitions/stepdef.js
```
