// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. 
// Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require("prompt-sync")();

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (true) {
    let palpite = prompt("Adivinhe o número (de 1 a 100): ");
    tentativas++;
    
    palpite = Number(palpite);

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou em " + tentativas + " tentativas.");
        break;
    } else if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else {
        console.log("Mais baixo!");
    }
}