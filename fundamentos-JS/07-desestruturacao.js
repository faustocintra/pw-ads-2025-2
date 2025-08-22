/*
    DESESTRUTURAÇÃO: é a operação pela quyal é possível extrair
    valores individuais de vetores e objetos, atribuindo-os a
    variaveis avulsas
 */

// 1) DESESTRUTURAÇÃO DE VETOR
const carros = ['Fusca', 'Chevette', 'Opala']

// Desestruturação
const [c1, c2, c3] = carros

/*
    Sem a desestruturação, seria necessário fazer
    const c1 = carros[0]
    const c2 = carros[1]
    const c3 = carros[2]
*/

console.log({c1,c2,c3})

// Desestruturação parcial: 1º e 2º valores
const [x, y] = carros
console.log('Primeiro e segundo carros: ',{x, y})

// Desestruturação parcial: 1º e 3º valores
const [a, , b] = carros
console.log('Primeiro e terceiro carros: ', {a, b})

// Desestruturação parcial: 2º e 3º valores
const [, m, n] = carros
console.log('Segundo e terceiro carros: ', {m, n})

// PROBLEMA: Troca de valores de variáveis entre si(swap)

let v1 = 10, v2 = 20
console.log('Valores originais:', {v1,v2})

// Modo clássico de fazer swap(usando variavel auxilliar)

// let aux = v1
// v1 = v2
// v2 = aux

// Swap usando desestruturação

{ [v1,v2] = [v2,v1]}

console.log('Valores trocados:', {v1,v2})

console.log('-'.repeat(80))

// 2) DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
    nome: "Orkutilson Osório Oliveira",
    sexo: 'sim',
    dataNasc: '2010-04-29',
    email: 'orkutilson@gamil.com'
}

/*
    Na desestruturação de ojetos, as variáveis avulsas:
    -> DEVEM ter o MESMO NOME das propriedades do objeto
    -> Podem ser especificadas em qualquer ordem
    -> Pode ser feito a desestruturação parcial
*/

const { sexo, nome, email } = pessoa

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Email:', email)