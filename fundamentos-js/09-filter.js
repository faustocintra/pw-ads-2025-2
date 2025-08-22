/*
    O metodo de vetores filter() cria um NOVO VETOR contendo
    apenas os elementos que atendam ao criterio apresentado
    pela função passada como parametro
*/

const numeros = [12, 9, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

// Cria um novo vetor apenas com os numeros negativos
console.log('Apenas número negativos:',
    numeros.filter(n => n < 0)
)

// Cria um novo vetor apenas com os numeros pares
console.log('Apenas números pares:',
    numeros.filter(i => i % 2 ===0)
)

// Cria um novo vetor apenas com números maiores que 20
console.log('Apenas numeros maiores que 20:',
    numeros.filter(x => x > 20)
)

// Novo vetor apenas com as frutas que começam com "m"
console.log('Apenas frutas com inicial "m":',
    frutas.filter(el => el.charAt(0) === 'm')
)

// Novo vetor apenas com as frutas que terminam com "r"
console.log('Apenas frutas que terminam em "r":',
    frutas.filter(fru => fru.slice(-1) === 'r')
)