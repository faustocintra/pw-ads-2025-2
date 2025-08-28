/*
O método de vetores filter() cria um NOVO VETOR contendo apenas os elementos
que atendam ao critério apresentado pela função passada como parâmetro
*/

const numeros = [12,19,3,-4,13,-11,15,-1,0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Cria um novo vetor apenas com os números negativos
console.log('Apenas números negativos:',
    numeros.filter(n => n < 0)
)

// Cria um novo vetor apenas com os números pares
console.log('Apenas números pares:',
    numeros.filter(n => n % 2 === 0)
)

// Cria um novo vetor apenas com os números maiores que 20
console.log('Apenas números maiores de 20',
    numeros.filter(x => x > 20)
)

// Novo vetor apenas com frutas que começam com 'm'
console.log('Apenas frutas com inicial "m":',
    frutas.filter(el => el.charAt(0) === 'm')
)

// Novo vetor apenas com frutas que terminam com 'r'
console.log('Apenas frutas que terminam com "r":',
    frutas.filter(el => el.slice(-1) === 'r')
)



