/*
    reduce() é um método de vetores que reduz o vetor a um único valor. Para isso, aplica uma função
    a cada elemento do vetor, a qual efetua uma operação sobre o elemento e acumula o resultado a
    cada passada
*/

const numeros = [12,19,3,-4,13,-11,15,-1,0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']
const nums2 = [1,2,3,4,5,6]

/*
    Usando reduce() para somar todos os elementos de vetor numeros. A função de callback do reduce(),
    em sua forma mais simples possui dois parametros:
    1° -> é o acumulador, que armazena o resultado das operações sobre os elementos anteriores
    2° -> corresponde ao elemento que está sendo processado no momento
*/

const soma = numeros.reduce((acum, el) => acum + el)
console.log('Soma de todos os elementos do vetor "números": ', soma)

//reduce() para multiplicar os elementos de nums2
const produto = nums2.reduce((acum,el) => acum * el)
console.log('Produto de todos os elementos do vetor "nums2": ', produto)

//Concatenando o vetor de frutas em uma única string, separando
// os elementos por ';' e convertendo em maiúsculos
const stringFrutas = frutas.reduce(
    (acum, el) => acum.toUpperCase() + ';' + el.toUpperCase()
)
console.log(stringFrutas)

console.log('-'.repeat(80))

// refazendo a concatenação do vetor de numeros, mostrando os valores intermedíarios do acumulador
const soma2 = numeros.reduce((acum, el) => {console.log(`Acumulador: ${acum}; elemento: ${el}`)
            return acum + el})
console.log('Soma de todos os elementos do vetor "numeros": ', soma2)

// refazendo a concatenação das frutas, mostrando os valores intermedíarios do acumulador
const strFrutas = frutas.reduce((acum, el) => {console.log(`Acumulador: ${acum}; elemento: ${el}`)
                return acum.toUpperCase() + ';' + el.toUpperCase()})
console.log(strFrutas)
