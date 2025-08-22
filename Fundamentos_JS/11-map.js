/*
O método de vetores map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
O novo vetor gerado por map() terá o mesmo comprimento que o vetor original.
*/

const numeros = [21, 4, -2, 54, 12, 3, -9, 1, 97, 10];
const frutas = ['maçã', 'banana', 'laranja', 'manga', 'uva', 'jabuticaba'];

const quadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(`NÚMEROS: ${numeros}
QUADRADOS: ${quadrados}`);

/*
map() que transforma o vetor original em itens de lista para o uso em uma página HTML (aplicação frequente em React)
*/
const itensLista = frutas.map(function(fruta) {
  return `<li>${fruta}</li>`;
});
console.log(`\nFRUTAS: ${frutas}
ITENS DE LISTA: ${itensLista}`);

console.log('-'.repeat(80))

console.log("<h1>Lista de Frutas</h1>")
console.log("<ul>")
for(const item of itensLista) {
  console.log(`  ${item}`)
}
console.log("</ul>")