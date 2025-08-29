// o método de teroes find() encontra o PRIMEIRO ELEMENTO encontra o PRIMEIRO ELEMENTO que correponda ao retorno de uma função passada como parâmetro

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas =  ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// encontrando o primeiro número negativo no vetor de números
console.log('Primeiro número negativo: ', numeros.find(n => n < 0))

// encontrando o primeiro número múltiplo de 5
console.log('Primeiro número múltiplo de 5: ', numeros.find(x => x % 5 === 0))

// encontrando o primeiro número maior que 20
console.log('Primeiro número maior que 20: ', numeros.find(i => i > 20))

// encontrando a primeira fruta que começa com "m"
console.log('Primeira fruta começando com "m": ', frutas.find(f => f.charAt(0) === 'm'))

// encontrando a primeira fruta que termina com "r"
console.log('Primeira fruta que termina com "r": ', frutas.find (f => f.slice(-1) === 'r'))