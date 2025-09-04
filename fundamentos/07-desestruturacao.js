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

console.log('-'.repeat(80)) // traço separador

// problema: troca de valores de variáveis entre si (swap)

let v1 = 10, v2 =20
console.log('Valores originais: ', {v1,v2})

// modo clássico de fazer swap (usando variável auxiliar)
// let aux = v1
// v1 = v2
// v2 = aux

// console.log('Valores trocados: ', {v1, v2})

// swap usando desetruturação
{ [v1, v2] = [v2, v1] }

console.log('Valores trocados: ', {v1, v2})
console.log('-'.repeat(80))

// 2) desestruturação de objetos

const pessoa = {
    nome: 'Orkutilson Osório Oliveira',
    sexo: "M",
    dataNasc: '2012-04-29',
    email: 'orkutilson@gmail.com'
}

/* na desestruturação de objetos, as variaveis avulsas: 
 -> devem ter o MESMO NOME das propriedades do objeto,
 -> podem ser especificados em qualquer ordem
 -> pode ser feito a desestruturação parcial 
*/

const {sexo, nome, email} = pessoa
console.log('Nome: ', nome)
console.log('Sexo: ', sexo)
console.log('Email: ', email)