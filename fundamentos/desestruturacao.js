/* 
    desestrututração é a operação pela qual é possivel extrair valores individuais de vetores e objetos, atribuindo-os a variaveis avulsas
*/

// 1) desestruturação de vetor
const carros = ['fusca', 'chevette', 'opala']

// desestruturação
const [c1, c2, c3] = carros

/*
    sem a destrututração, seria necessário fazer
    const c1 = carro[0]
    const c2 = carro[1]
    const c3 = carro[2]
*/

console.log(c1, c2, c3)

// desestruturação parcial: 1° e 3° valores
const [x, y] = carros
console.log('Primeiro e segundo carros: ', {x,y})

//desestruturação parcial: 1° e 3° valores
const [a, ,b] = carros
console.log('Primeiro e terceiro carro: ', {a,b})

//desestruturação parcial: 2° e  3° valores
const [, m, n] = carros
console.log('Segundo e terceiro carros: ', {m, n})