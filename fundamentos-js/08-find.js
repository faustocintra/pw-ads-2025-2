/*
    O método de vetores find() encontra o PRIMEIRO ELEMENTO
    que corresponde ao retorno de uma função passada como 
    parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja','abacaxi','maça','uva','jabuticaba','maracuja']

console.log('Primeiro número negativo:',
    numeros.find(n => n < 0)
)

console.log('Primeiro número multiplo de 5:', 
    numeros.find(n => n % 5 == 0)
)

console.log('Primero número maior que 20:',
    numeros.find(n => n > 20)
)

console.log('Primeira fruta que começa com "m":',
    frutas.find(f => f.charAt(0) === 'm')
)

console.log('Primeira fruta terminando com "r":',
    frutas.find(f => f.slice(-1) === 'r')
)