// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require("prompt-sync")();

function palavrasUnicas(frase) {
  frase = frase.toLowerCase();

  const arrayFrase = frase.split(/[\s.,;!?_()-]+/);

  const arrayPalavras = [];

  for (let i = 0; i < arrayFrase.length; i++) {
    const palavraAtual = arrayFrase[i];

    if (palavraAtual !== '') {
      if (!arrayPalavras.includes(palavraAtual)) {
        arrayPalavras.push(palavraAtual);
      }
    }
  }

  return arrayPalavras;
}

const minhaFrase = "olá olá mundo mundo";
console.log(palavrasUnicas(minhaFrase));
