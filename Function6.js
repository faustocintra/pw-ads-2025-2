// arquivo 7 desestruturaçao  e a operaçao pela qual e possivel  extrair variaveis individuais de vetores e objetos atribuindo-os a variaveis avulsos 

//1) Desestruturaçao de vetor 
const carros = ['Fusca', 'Chevete', 'Opala']

//desestruturaçao 
const [c1,c2,c3] = carros

// sem a desestruturaçao seria nescessario fazer 
//const c1 = carro[0] , const c2 = carro[1]  const c3 = carro[2]
console.log({c1,c2,c3})

// desestruturaçao parcial : 1° e 2° valores 
const [x,y] = carros
console.log('Primeiro e segundo  carros: ', {x,y})

// desestruturaçao parcial 1° e 3° valores 
const [ a ,, b] = carros 
console.log('Primeiro e terceiro carros: ', {a, b})

// desestruturaçao parcial 2° e 3° valores 
const [,m,n] = carros 
console.log('Segundo e terceiro carros: ',{m,n})
// ultilizando as virgulas vc denomina o valores que serao pulados rx: a, , b e assim por diante 

console.log(' - '.repeat(80))// Traço separador 
// PROBLEMA:   troca de valores de variaveis entre si  (swap)

let v1= 10 , v2=20 
console.log('Valores originais: ', {v1,v2})

// modo classico de fazer  swap usando variavavel auxiliar 

// let aux = v1 
// v1 = v2 
// v2 = aux 

// o msm metodo so que agora usando a desestruturaçao 
{[v1,v2]=[v2,v1]}

console.log('Valors Trocados: ', {v1,v2})

console.log('-'.repeat(80))

// Desestruturaçao de objetos 

const pessoa = {
    nome : 'Belo',
    sexo : 'M',
    datanasc: '2010-05-12',
    email: 'belo@Gmail.com'
}

/* Na desestruturaçao de objetos de variaveis avulsas 
-> DEVEM ter o MESMO NOME das propriedades do objeto
-> Podem ser especificados e, qualquer ordem 
-> pode ser feita a desistruturaçao parcial 
*/

const {sexo, nome, email} = pessoa // nao e nescessario seguir uma ordem ou a ordem pois a definçao e pelo nome 

console.log('Nome: ', nome)
console.log('Sexo: ', sexo)
console.log('Email: ', email)

