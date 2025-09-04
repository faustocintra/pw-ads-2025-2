/*
  O método de vetores find() encontra o PRIMEIRO ELEMENTO
  que corresponda ao retorno de uma função passada como
  parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Encontrando o primeiro número negativo no vetor de números
console.log('Primeiro número negativo:',
  numeros.find(n => n < 0)
)

// Encontrando o primeiro número múltiplo de 5
console.log('Primeiro número múltiplo de 5:',
  numeros.find(x => x % 5 === 0)
)

// Encontrando o primeiro número maior que 20
console.log('Primeiro número maior que 20:',
  numeros.find(i => i > 20)
)

// Encontrando a primeira fruta que começa com "m"
console.log('Primeira fruta começando com "m":',
  frutas.find(f => f.charAt(0) === 'm')
)

// Encontrando a primeira fruta que termina com "r"
console.log('Primeira fruta terminando com "r":',
  frutas.find(f => f.slice(-1) === 'r')
)