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