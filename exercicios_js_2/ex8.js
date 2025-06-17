// 8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const prompt = require("prompt-sync")();

function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;
    if (!acumulador[cliente]) {
      acumulador[cliente] = 0;
    }
    acumulador[cliente] += total;
    return acumulador;
  }, {});
}

const vendas = [
  { cliente: 'Lucas', total: 250 },
  { cliente: 'Mariana', total: 400 },
  { cliente: 'Lucas', total: 150 },
  { cliente: 'João', total: 500 },
  { cliente: 'Mariana', total: 100 }
];

const resultado = agruparPorCliente(vendas);
console.log(resultado);