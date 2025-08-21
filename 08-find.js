/*
    O metodo de valores find() encontra o PRIMEIRO ELEMENTO
    que corresponda ao retorno de uma função passada como
    parametro
*/

const numeros = [12, 9, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

// Encontrando o primeiro número negativo no vetor de numeros
console.log('Primeiro número negativo:', 
    numeros.find(n => n <0)
)

// Encontrando o primeiro numero multiplo de 5
console.log('Primeiro numero multiplo de 5:',
    numeros.find(x => x % 5 === 0)
)

// Encontrando o primeiro numero maior que 20
console.log('Primeiro numero maior que 20:',
    numeros.find(i => i > 20)
)

// Encontrando a primeira fruta que começa com "m"
console.log('Primeira fruta começando com "m":',
    frutas.find(f => f.charAt(0) === 'm')
)

// Encontrando o primeira fruta que termina com "x"
console.log('Primeira fruta terminando com "r":',
    frutas.find(f => f.slice(-1) === 'r')
)