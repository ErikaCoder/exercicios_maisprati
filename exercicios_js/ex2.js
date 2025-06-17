// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma estrutura decontrole if-else. */

 const prompt = require("prompt-sync")();

 let idade = parseInt(prompt("Digite a sua idade: "));

 if (idade <= 12) {
    console.log("Você é criança");
 } else if (idade <= 18) {
    console.log("Você é adolescente");
 } else if (idade <= 59) {
    console.log("Você é adulto");
 } else {
    console.log("Você é idoso");
 }
