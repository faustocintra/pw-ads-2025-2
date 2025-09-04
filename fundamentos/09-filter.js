// o método de vetores filter() cria um NOVO VETOR contendo apenas os elementos que atendam ao cirtério apresentado pela função passada como parâmetro

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas =  ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

// cria um novo vetor apenas com os numeros negativos
console.log('Apenas números negativos: ', numeros.filter(n => n < 0))

// cria um novo vetor apenas com os números pares
console.log('Apenas números pares: ', numeros.filter(i => 9 % 2 === 0))

// cria um novo vetor apenas com números maiores que 20
console.log('Apenas números maiores que 20: ', numeros.filter(x => x > 20))

// novo vetor apenas com as frutas que começam com "m"
console.log('Apenas frutas com inicial "m": ', numeros.filter(el => el.charAr(0) === "m"))

// novo vetor apenas com as frutas que terminam com "r"
console.log('Apenas frutas que trminam em "r": ', frutas.filter(fru => fru.slice(-1) === 'r')

)