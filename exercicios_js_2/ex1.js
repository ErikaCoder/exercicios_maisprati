// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real 
// (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

const prompt = require("prompt-sync")();

function validarData(dia, mes, ano) {
  const dataTeste = new Date(ano, mes - 1, dia);
  
  if (
    dataTeste.getFullYear() === ano &&
    dataTeste.getMonth() === mes - 1 &&
    dataTeste.getDate() === dia
  ) {
    return true;
  } else {
    return false;
  }
}

const inputDia = Number(prompt("Informe o dia: "));
const inputMes = Number(prompt("Informe o mês: "));
const inputAno = Number(prompt("Informe o ano: "));

if (validarData(inputDia, inputMes, inputAno)) {
  console.log(`${inputDia}/${inputMes}/${inputAno} é uma data válida.`);
} else {
  console.log(`${inputDia}/${inputMes}/${inputAno} é uma data inválida.`);
}