/*
    DESESTRUTURAÇÃO é a operação pela qual é possivel extrair
    valores individuais de vetores e objetos, atribuindo-os a 
    variáveis avulsas
*/

// 1) DESESTRUTURAÇÃO DE VETOR
const carros = ['Fusca', 'Chevette', 'Opala']

// Desestruturação 
const [c1, c2, c3] = carros

/*
    Sem a destruturação, seria necessário fazer
    const c1 = carros[0]
    const c2 = carros[1]
    const c3 = carros[2]
*/

console.log({c1, c2, c3})

// Desestrututação parcial: 1º e 2º valores
const [x, y] = carros
console.log('Primeiro e segundo carros:', {x, y})

// Destruturação parcial: 1º e 3º valores
const [a, , b] = carros
console.log('Primeiro e terceiro carros:', {a, b})

// Desestruturação parcial: 2º e 3º valores
const [, m, n] = carros
console.log('Segundo e terceiro carros:', {m, n})

console.log('-'.repeat(80)) // traço separador

// PROGRAMA: troca de valores de variaveis entre si (swap)

let v1 = 10, v2 = 20
console.log('Valores originais', {v1, v2})

// Modo classico de fazer swap (usando variavel auxiliar)
// let aux = v1
// v1 = v2
// v2 = aux

//ctrl ; >>  comenta a parte seleciona

// Swap usando destruturação
{[v1, v2], [v2, v1]}

console.log('Valores trocados:', {v1, v2})

console.log('-'.repeat(80))

// 2) DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
    nome: 'Orktilson Osório Oliveira',
    sexo: 'M',
    dataNasc: '2010-04-29',
    email: 'orkutilson@gmail.com'
}

/*
    Na destruturação de objetos, as variaveis avulsas:
    --> DEVEM ter o MESMO NOME dos propriedades do objeto
    --> Podem  ser especificados em qualquer ordem
    --> Pode ser feita a desestruturação parcial
*/

const {sexo, nome, email} = pessoa

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Email:', email)
