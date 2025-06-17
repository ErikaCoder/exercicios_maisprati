// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

const prompt = require("prompt-sync")();

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [['produto', 'Bicicleta'], ['quantidade', 5], ['estoque', 'Sim']];
const objeto = paresParaObjeto(pares);
console.log(objeto);

const novoPares = objetoParaPares(objeto);
console.log(novoPares);

