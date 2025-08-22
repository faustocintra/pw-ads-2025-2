/*
reduce() é um método que aplica uma função a um acumulador e a cada elemento de um array (da esquerda para a direita) para reduzi-lo a um único valor.
*/

const numeros = [21, 4, -2, 54, 12, 3, -9, 1, 97, 10];
const frutas = ['maçã', 'banana', 'laranja', 'manga', 'uva', 'jabuticaba'];
const num2 = [1, 2, 3, 4, 5, 6]

/*
 Usando reduce() para somar todos os números do vet numeros
  A função de callback recebe dois parâmetros: 
  1º --> o acumulador = que armazena o valor acumulado da operação
  2º --> valor atual = que representa o elemento atual do array sendo processado
*/

const soma = numeros.reduce((acum, el)=> acum + el);
console.log(`NÚMEROS: ${numeros}
SOMA DE TODOS OS Nº: ${soma}`);

//reduce() para multiplical os elementos de num2
const mult = num2.reduce((acum, el) => acum * el);
console.log(`NÚMEROS: ${num2}
MULTIPLICAÇÃO DE TODOS OS Nº: ${mult}`);

//Concatenando o vetor de frutas em uma unica string
const concatFrutas = frutas.reduce((acum, el) => acum + ' - ' + el);
console.log(`FRUTAS: ${frutas}
CONCATENAÇÃO: ${concatFrutas}`);

// Refazendo a soma do vetor numeros mostrando os valores intermediario do acumulador
const somaIntermediaria = numeros.reduce((acum, el) => {
  console.log(`Acumulador: ${acum}, Elemento Atual: ${el}`);
  return acum + el;
}, 0);
console.log(`NÚMEROS: ${numeros}
SOMA DE TODOS OS Nº: ${somaIntermediaria}`);

console.log('-'.repeat(80));

//Refazendo  a concatenação do vetor de frutas mostrando os valores intermediarios do acumulador
const concatFrutasIntermediaria = frutas.reduce((acum, el) => {
  console.log(`Acumulador: ${acum}, Elemento Atual: "${el}"`);
  return acum.toLowerCase() + ' - ' + el.toUpperCase();
}, '');
console.log(`CONCATENAÇÃO: ${concatFrutasIntermediaria}`);
