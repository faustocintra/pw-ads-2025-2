//encontyrado o maior e o menor valor em uma serie   , ------ arquivo 6 espalhando 
let minimo = Math.min(2,-5,4,0,11,-1) 
let maximo = Math.max(2,-5,8,0,11,-1)

console.log('Valores avulsos: ', {minimo,maximo} )

// e se a serie de numeros estiver em um vetor  
const nums = [2,-5,4,0,11,-1]

minimo = Math.min(nums)
maximo = Math.max(nums)

// Math.min() e Math.max() nao conseguem trabalhar com os numeros estando em um vetor 

console.log('Valores em vetor: ', {minimo,maximo})

/*
A sintaxe de espalhamento (spreading) representada por "..." antes de nome da variavel e capaz de "Desempacotar" um vetor em uma serie de valores avulsos 
*/

minimo = Math.min(...nums)
maximo = Math.max(...nums)
console.log('Valores apos espalhamento', minimo,maximo)

// OUTROS USOS PARA SINTAXE DE  ESPALHAMENTO

const carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat ',
    ano: 1984,
    cor: 'Bege'
}
// copiando o carro1 para o carro2 
//const carro2 = carro1 // nao funcina para copiar pois quando se e onjeto ele trabalha no mesmo espaço de memoria assim eles sao o msm e se modifica tudo no msm local 

//Forçando uma copia de um objeto usando espalhamento 
const carro2 ={...carro1}

// mudando o  valor dasa propriedades do carro2 

  carro2.modelo =  'Fusca',
  carro2.marca='Volks ',
  carro2.ano =  1969,
  carro2.cor ='preto'

// exibindo ambos os carros 
console.log({carro1,carro2})

// PROBLEMA: juntar dois ou mais vetores em um novo vetor 

const frutas = ['maça','banana','laranja','uva']
const verduras = ['alface','couve','rucula','acelga']

const hortifrut = [...frutas,...verduras]

console.log({hortifrut})

//PROBLEMA: Declarar uma funçao que recebe um numero arbitrario de parametros

function soma ( ...nums){

    //nums e recibido dentro da funçao como um vetor
    let resultado = 0 
    for ( let n of nums) resultado += n 
    return resultado  
}

console.log(`Soma de 4 numeros: ${soma(1,2,3,4)}`)
console.log(`Soma de 7 numeros: ${soma(11,22,33,44,55,66,77)}`)