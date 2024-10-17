# language: pt

Funcionalidade: Ler informações de um cartão específico do Trello
  Como um usuário do Trello
  Lucas quer ler informações de um cartão específico do Trello
  Para que consiga se manter atualizado

Cenário: Leitura bem sucedida
  Dado que a URL do cartão do Trello é "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
  Quando ele requisita o endereço com método GET
  Então o campo "name" da estrutura "list" deve ser "Professional"
  E o status code de resposta deve ser "200"
