// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

 const prompt = require("prompt-sync")();

console.log(`
***********************************
*   Bem-vindo(a) ao ELO Games    *
***********************************

Escolha o console para ver os jogos disponíveis:
1. PS4
2. PS5
3. Xbox Series X / One
4. Nintendo Switch
5. Outros
6. Sair
`);

 let opcao = parseInt(prompt("Digite a opção escolhida: "));

 switch(opcao) {
 case 1:
    console.log("Você escolheu PS4");
    console.log("Jogos disponíveis: God of War, The Last of Us, Uncharted 4, GTA 5");
    break;
  case 2:
    console.log("Você escolheu PS5");
    console.log("Jogos disponíveis: Spider-Man: Miles Morales, Returnal, Ratchet & Clank, GTA 5");
    break;
  case 3:
    console.log("Você escolheu Xbox Series X/S");
    console.log("Jogos disponíveis: Halo Infinite, Forza Horizon 5, Starfield, GTA 5");
    break;
  case 4:
    console.log("Você escolheu Nintendo Switch");
    console.log("Jogos disponíveis: Zelda: Breath of the Wild, Mario Odyssey, Pokémon Scarlet");
    break;
  case 5:
    console.log("Você escolheu Outros consoles");
    console.log("Jogos disponíveis: Cyberpunk 2077 (PC), Beat Saber (VR), Valorant (PC)");
    break;
  case 6:
    console.log("Saindo... Obrigado por visitar o ELO Games!");
    break;
  default:
    console.log("Opção inválida. Por favor, digite um número entre 1 e 6.");
}