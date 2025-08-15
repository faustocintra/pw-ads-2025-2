/*
    DESESTRUTURAÇÃO é a operação pelo qual é possível extrair
    valores individuais de vetores e objetos, atribuindo-os a
    variáveis avulsas
*/ 

// Desestruturação de vetor
const carros = ['Fusca','Chevette','Opala']

// Desestruturação
const [c1,c2,c3] = carros

/*
    Sem a desestruturação seria necessário fazer
    const c1 = carros[0]
    const c2 = carros[1]
    const c3 = carros[2]

*/

console.log({c1,c2,c3})