import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';
import { requestGET } from '../../index.js';

Given('que a URL do cartão do Trello é {string}', function(url) {
  this.url = url;
});

When('ele requisita o endereço com método GET', async function() {
  this.response = await requestGET(this.url);
});

Then('o campo {string} da estrutura {string} deve ser {string}', function(campo_1, campo_2, valor) {
  assert.strictEqual(this.response?.objeto?.data[campo_2][campo_1], valor);
});

Then('o status code de resposta deve ser {string}', function(status_esperado) {
  assert.equal(this.response?.res?.statusCode, status_esperado);
});
