/*
    O método de vetores filter() cria um NOVO VETOR contendo
    apenas os elementos que atendam ao critério apresentado
    pela função passando como parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja','abacaxi','maça','uva','jabuticaba','maracuja']

console.log('Apenas números negativo:',
    numeros.filter(n => n < 0)
)

console.log('Apenas números pares:', 
    numeros.filter(n => n % 2 == 0)
)

console.log('Apenas números maiores que 20:',
    numeros.filter(n => n > 20)
)

console.log('Apenas frutas que começam com "m":',
    frutas.filter(f => f.charAt(0) === 'm')
)

console.log('Apenas frutas que terminam com "r":',
    frutas.filter(f => f.slice(-1) === 'r')
)
