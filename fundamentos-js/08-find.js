/*
<<<<<<< HEAD
    O método de vetores find() encontra o PRIMEIRO ELEMENTO
    que corresponda ao retorno de uma função passada como
    parâmetro
=======
  O método de vetores find() encontra o PRIMEIRO ELEMENTO
  que corresponda ao retorno de uma função passada como
  parâmetro
>>>>>>> upstream/main
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// Encontrando o primeiro número negativo no vetor de números
<<<<<<< HEAD
console.log('Primeiro número negativo: ', numeros.find(n => n < 0))

//Encontrando o primeiro número múltiplo de 5
console.log('Primeiro número múltiplo de 5: ', numeros.find(x => x % 5 === 0))

//Encontrando o primeiro número maior que 20
console.log('Primeiro número maior que 20: ', numeros.find(i => i > 20))

//Encontrando a primeira fruta que começa com "m"
console.log('Primeira fruta que começa com "m": ', frutas.find(f => f.charAt(0) === 'm')) //Pode ser usado o [0]

//Encontrando a primeira fruta que começa com "r"
console.log('Primeira fruta que temina com "r": ', frutas.find(f => f.slice(-1) === 'r')) //O slice pode contar de trás pra frente, mas pode ser usado o [.length-1]
=======
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
>>>>>>> upstream/main
