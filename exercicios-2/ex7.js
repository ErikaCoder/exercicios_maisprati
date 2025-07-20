// 7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array
 // apenas com os nomes, ordenados por preço crescente, usando map, sort.

const prompt = require("prompt-sync")();

function obterNomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}
const produtos = [
  { nome: 'Celular', preco: 1500 },
  { nome: 'Fone de Ouvido', preco: 200 },
  { nome: 'Carregador', preco: 100 },
  { nome: 'Notebook', preco: 3500 }
];

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); 
