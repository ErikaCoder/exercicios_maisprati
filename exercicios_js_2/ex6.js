// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), 
// retornando resultados instantâneos em repetidas invocações.

const prompt = require("prompt-sync")();

function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function soma(a, b) {
  console.log('Calculando...');
  return a + b;
}

const somaMemoizada = memoize(soma);

console.log(somaMemoizada(2, 3)); 
console.log(somaMemoizada(2, 3)); 
