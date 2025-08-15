// Encontrando o maior e menor valor em uma série
let minimo = Math.min(2, -5, 4, 0 ,11, 1)
let maximo = Math. max(2, -5, 8, 0, 11, -1)
 
console.log('Valores avulsos: ', {minimo, maximo})
 
//E se a série de números estiver em um vetor?
const nums = [2, -5, 4, 0, 11, -1]
 
minimo = Math.min(nums)
maximo = Math.max(nums)
 
console.log('Valores em vetor: ', {minimo, maximo})
 
// Se o número estiver no vetor não conseguimos achar o minimo e o máximo,
// a solução para isso é o espalhamento
//Math.min() e Math.max() não conseguem trabalhar com os número em um vetor
 
/* A sintaxe de espalhamento (spreading), representada por
...antes do nome da variável, pe capaz de "desempacotar"
um vetor em uma série de valores avulsos */
 
minimo = Math.min(...nums)
maximo = Math.max(...nums)
 
console.log('Valores após espalhamento: ', {minimo, maximo})

//OUTRAS USOS PARA A SINTAXE DE ESPELALHAMENTO

const carro1 =
{
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'Bege'
}

//Forçando a cópia de um objeto usando espelhamento
const carro2 = {...carro1}

/* Copiando carro para carro 2 de maneira errada
const carro2 = carro1*/

//Mudando o valor das propriedades do carro2
carro2.modelo = 'Fusca'
carro2.marca = 'VolksWagen'
carro2.ano = 'Preto'
carro2.cor = '1969'

//Exibindo ambos os carros 
console.log({carro1, carro2})

/*
    Problema juntar dois ou mais vetores em um novo vetor
*/

const frutas = [`maçã`, `banana`,`laranja`, `uva` ]
const verduras = ['alaface', 'couve', 'rúcula', 'acelga']

const hortifruti = [...frutas, ...verduras]

console.log(hortifruti)


/*
    PROBLEMA: Declarar uma função que recebe um número arbitrário
    de parâmetros
*/

function soma(...nums)
{
    //nums é recebido dentro da função como um vetor 
    let resultado = 0
    for (let n of nums) resultado += n
    return resultado
}


console.log(`Soma de 4 números: ${soma(1, 2, 3, 4)}`)
console.log(`Soma de 7 números ${soma(11, 22, 33, 44, 55, 66, 77)}`)