/* reduce() é um método de vetores que o vetor a um único valor.
Para isso, aplica uma função a cada elemento do vetor, 
a qual efetura um aoperação sobre o elemento e acumula o resultado a cada passada. */

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']
const nums2 = [1, 2, 3, 4, 5, 6]

/* Usando reduce() para somar todos os elmentos do vetor numeros
A função de callback do reduce(), em susa forma mais simples,
possui dois parâmetros: 
1° ~> é o acumulador, que armazena o resultado das operações 
2° ~> corresponde ao elemento que está sendo processado no momento */

const soma = numeros.reduce((acum, ele) => acum + el)
console.log('Soma de todos os elementos do vetor "numeros", soma')

//reduce() para multiplicar os elemntos de nums2
const produto = nums2.reduce((a, e) => a * e)
console.log('Produtos de todos os elementos do vetor "nums", produto')

/* Concatenando o vetor de frutas em uma única string, 
separando os elementos por ';' e convertendo para maiúsculas */

const stringFrutas = frutas.reduce((acc, el) => acc.toUpperCase() + ';' + el.toLocaleUpperCase())
console.log(stringFrutas)

console.log('-'.repeat(80))

/* Refazendo a soma do vetor numeros, mostrando os valores intermediários do acumulador */
soma = numeros.reduce((acum, el) => {
console.log(`Acumulador: ${acum}; elemento: ${el}`)
return acum + el })
console.log('Soma de todos os elementos do vetor "numeros": ',soma2)

console.log('-'.repeat(80))

/* Refazendo a soma das frutas, mostrando os valores intermediários do acumulador */
const strFrutas = frutas.reduce((acc, el) => {
    console.log(`Acumulador: "${acc}"; elemento: "${el}"`)
    return acc.toUpperCase() + ';' + el.toUpperCase() })
    console.log(strFrutas)

