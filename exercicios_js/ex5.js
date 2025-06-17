// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de
// peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")();

let altura = parseFloat(prompt("Digite a sua altura: "));
let peso = parseFloat(prompt("Digite o seu peso: "));

let IMC = peso / (altura * altura);

console.log(`O seu IMC é de ${IMC.toFixed(1)}`);

if (IMC < 18.5) {
  console.log(`O seu índice de massa corporal (IMC) está na categoria: Baixo peso!`);
} else if (IMC < 24.9) {
  console.log(`O seu índice de massa corporal (IMC) está na categoria: Peso Normal!`);
} else if (IMC < 29.9) {
  console.log(`O seu índice de massa corporal (IMC) está na categoria: Sobrepeso!`);
} else if (IMC < 34.9) {
  console.log(`O seu índice de massa corporal (IMC) está na categoria: Obesidade!`);
} else if (IMC < 39.9) {
  console.log(`O seu índice de massa corporal (IMC) está na categoria: Obesidade Moderada!`);
} else {
  console.log(`O seu índice de massa corporal (IMC) está na categoria: Obesidade Grave!`);
}
