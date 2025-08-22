/*
    o metodo de vetores map() cria um novo vetor no qual cada elemento
    corresponde a uma transformação do elemetno do vetor original.
    A transformação é controlada pela função passada como parametro.
    O novo vetor gerador por map() terá sempre o mesmo numero de elementos 
    do vetor original.
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

// Gerando um novo vetor em que cada elemento corresponde ao valor do
// elemento original elevado ao quadrado
const quadrados = numeros.map(n => n ** 2)
console.log('Vetor com números ao quadrado:', quadrados)

// map() que transforma os elementos do vetor original em itens
// da lista para uso em uma pagina HTML (aplicação frequente em React)
const itensLista = frutas.map(f => `<li>${f}</li>`)
console.log('Vetor com itens de lista:', itensLista)

console.log('-'.repeat(80))

console.log('<h1>FRUTAS ENCONTRADAS NO BRASIL</h1>')
console.log('<ul>')
for(const item of itensLista) console.log(' ', item)
    console.log('</ul>')