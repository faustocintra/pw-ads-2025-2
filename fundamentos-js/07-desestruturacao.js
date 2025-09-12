<<<<<<< HEAD
/*DESESTRUTURAÇÃO é a operação pela qual é possível extrair valores individuais
de vetores e objetos, atribuindo=os a variáveis avulsas*/

//1) DESESTRUTURAÇÃO DE VETOR
const carros = ['Fusca', 'Chevete', 'Opala']

//DESESTRUTURAÇÃO
const[c1, c2, c3] = carros
/*Sem a desestruturação seria necessário fazer
const c1 = carro[0]
const c2 = carro[1]
const c3 = carro[2]
*/
console.log({c1, c2, c3})

// Desestruturação parcial: 1° e 2º valores
const [x,y] = carros
console.log('Primeiro e segundo carros: ', {x,y})

// Desestruturação parcial: 1° e 3º valores
const [a, , b] = carros
console.log('Primeiro e terceiro carros: ', {a,b})

// Desestruturação parcial: 2° e 3º valores
const [, m,n] = carros
console.log('Segundo e terceiro carros: ', {m,n})

console.log('-'.repeat(80)) // traço separador

//PROBLEMA: troca de valores de variáveis entre si (swap)

let v1 = 10, v2 = 20
console.log('Valores originais:', {v1,v2})

//Modo clássico de fazer swap (usando variável auxiliar)
=======
/*
  DESESTRUTURAÇÃO é a operação pela qual é possível extrair
  valores individuais de vetores e objetos, atribuindo-os a
  variáveis avulsas
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

console.log({c1, c2, c3})

// Desestruturação parcial: 1º e 3º valores
const [x, y] = carros
console.log('Primeiro e segundo carros:', {x, y})

// Desestruturação parcial: 1º e 3º valores
const [a, , b] = carros
console.log('Primeiro e terceiro carros:', {a, b})

// Desestruturação parcial: 2º e 3º valores
const [, m, n] = carros
console.log('Segundo e terceiro carros:', {m, n})

console.log('-'.repeat(80))   // Traço separador

// PROBLEMA: troca de valores de variáveis entre si (swap)

let v1 = 10, v2 = 20
console.log('Valores originais:', {v1, v2})

// Modo clássico de fazer swap (usando variável auxiliar)
>>>>>>> 7a116007e0028752c4637287f6a47842415ab718
// let aux = v1
// v1 = v2
// v2 = aux

// Swap usando desestruturação
<<<<<<< HEAD
{ [v1,v2] = [v2, v1]}
=======
{ [v1, v2] = [v2, v1] }

>>>>>>> 7a116007e0028752c4637287f6a47842415ab718
console.log('Valores trocados:', {v1, v2})

console.log('-'.repeat(80))

<<<<<<< HEAD
// 2) Desestruturação de objetos
const pessoa = {
    nome: 'Orkutilson Osório de Oliveira',
    sexo: 'M',
    dataNasc: '2010-04-29',
    email: 'orkutilson@gmail.com'
}

/*
Na desestruturação de objetos, as variáveis avulsas:
-> devem ter o MESMO NOME das propriedades do objeto
-> Podem ser especificadas em qualquer ordem
-> Pode ser feita a desetruturação parcial
*/

const { sexo, nome, email} = pessoa
console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Email:', email)
=======
// 2) DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
  nome: 'Orkutilson Osório Oliveira',
  sexo: 'M',
  dataNasc: '2010-04-29',
  email: 'orkutilson@gmail.com'
}

/*
  Na desestruturação de objetos, as variáveis avulsas:
  ~> DEVEM ter o MESMO NOME das propriedades do objeto
  ~> Podem ser especificadas em qualquer ordem
  ~> Pode ser feita a desestruturação parcial
*/

const { sexo, nome, email } = pessoa

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Email:', email)
>>>>>>> 7a116007e0028752c4637287f6a47842415ab718
