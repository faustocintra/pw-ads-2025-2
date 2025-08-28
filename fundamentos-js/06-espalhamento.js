//Encontrando o maior e menor valor em uma série
let minimo = Math.min(2, -5, 4, 0, 11, 1)
let maximo = Math.max(2, -5, 8, 11, -1)
console.log(`Valores avulsos: , ${minimo, maximo}`)

//E se a série de números estiver em um vetor?
const nums = [2, -5, 4, 0, 11, -1]

minimo = Math.min(nums)
maximo = Math.max(nums)

/*Se o número estiver no vetor não conseguimos achar o mínimo e o máximo
A solução para isso é o espalhamento

Math.min() e Math.max() não conseguem trabalhar com os números em um vetor
*/
console.log(`Valores em vetor: , ${minimo, maximo}`)

/*A sintaxe de espelhamento (spreading), representada por três pontos (...)
antes do nome da variável é capaz de desempacotar
um vetor em uma série de valores avulsos*/

minimo = Math.min(...nums)
maximo = Math.max(...nums)
console.log(`Valores após espalhamento: , ${minimo, maximo}`)

//OUTROS USOS PARA A SINTAXE DE ESPELHAMENTO

const carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'Bege'
}

/*Copiando carro1 para carro2
const carro2 = carro1

Mudando o valor das propriedades de carro2
carro2.modelo = 'Fusca'
carro2.marca = 'Volkswagen'
carro2.cor = 'preto'
carro2.ano = 1969

Exibindo ambos os carros
console.log({carro1, carro2})*/

/* Copiando carro1 para carro2
const carro2 = carro1 não funcona para copiar nesse caso os dois apontam para a mesma coisa

Forçando a cópia de um objeto usando espalhamento */
const carro2 = {...carro1}
carro2.modelo = 'Fusca'
carro2.marca = 'Volkswagem'
carro2.cor = 'preto'
carro2.ano = 1969

// Exibindo ambos os carros
console.log({carro1, carro2})

//Problema: juntar dois ou mais vetores em um novo vetor
const frutas = ['maçã', 'banana', 'laranja', 'uva']
const verduras = ['alface', 'couve', 'rúcula', 'acelga']

const hortifruti = [...frutas, ...verduras]
console.log({hortifruti})


//Problema: declarar uma função que recebe um número arbitrário de parâmetros
function soma(...nums){
    //nums é recebido dentro da função como um vetor
    let resultado = 0
    for(let n of nums) resultado += n
    return resultado
}
console.log(`Soma de 4 números: ${soma(1,2,3,4)}`)
console.log(`Soma de 7 números: ${soma(11,22,33,44)}`)
