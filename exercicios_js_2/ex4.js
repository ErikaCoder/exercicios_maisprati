// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

const prompt = require("prompt-sync")();

function fatorial(n) {
  if (n < 0) {
    throw new Error("Não é possível calcular o fatorial de um número negativo");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

function mostrarFatorial(n) {
  console.log(`Fatorial de ${n}: ${fatorial(n)}`);
}

mostrarFatorial(5);
