/*
    O método de vetores filter() cria um NOVO VETOR contendo
    apenas os elementos que atendam ao critério apresentado
    pela função passada como parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Cria um vetor novo com os números negativos
console.log('Apenas números negativos: ', numeros.filter(n => n < 0))

// Cria um vetor novo com os números pares
console.log('Apenas números pares: ', numeros.filter(x => x % 2 === 0))

// Cria um vetor novo com os números maiores que 20
console.log('Apenas números maiores que 20: ', numeros.filter(i => i > 20))

// Cria um vetor novo com as frutas que começam com "m"
console.log('Apenas frutas que começam com "m": ', frutas.filter(f => f.charAt(0) === 'm'))

// Cria um vetor novo com as frutas que terminam com "r"
console.log('Apenas frutas que teminam com "r": ', frutas.filter(f => f.slice(-1) === 'r'))