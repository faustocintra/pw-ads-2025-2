/* O método de vetores .map() cria um novo veotr no qual cada elemento corresponde a um transformação do elemento do vetor original.
A transformação é controlada pela função passada como parâmetro. O novo vetor gerado por map() terá sempre o mesmo número de elementos do vetor original
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas =  ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// gerando um novo veotr em que cada elemento corresponde ao valor do elemento original elevada ao quedradro
const quadrados = numeros.map(n => n **2)
console,log('Veotr com números ao quadrado: ', quadrados)

// map() que transforma os elementos do vetor original em itens de lista para uso em uma página HTML (aplicação frequente em react)
const itensLista = frutas.map(f => `<li>${f}</li>`)
console.log('Vetor com itens de lista: ', itensLista)

console.log('-'.repeat(80))

console.log(`{h1}Frutas Encontradas No BRasil</h1>`)
console.log(`<ul`)

for(const item of itensLista) console.log(` `, item)
console.log(`</ul>`)
