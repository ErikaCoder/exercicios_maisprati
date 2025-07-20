// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0, cont = 0, num;

while ((num = parseFloat(prompt("Número (0 para sair): "))) !== 0) {
  soma += num;
  cont++;
}

console.log("Média:", cont > 0 ? (soma / cont).toFixed(2) : "nenhum número digitado");