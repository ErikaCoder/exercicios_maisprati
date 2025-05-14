// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let qtdmacas = Number(prompt("Digite o número de maçãs compradas: "));

function valorTotal(qtdmacas) {
    return qtdmacas * (qtdmacas < 12 ? 0.30 : 0.25);
}
console.log(`O valor total da sua compra é de  ${valorTotal(qtdmacas).toFixed(2)}`);
