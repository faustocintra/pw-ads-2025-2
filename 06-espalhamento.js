// Encontrando o maior valor e menor em uma série
let minimo = Math.min(5, 3, 7, 2, 8, -1, 4)
let maximo = Math.max(5, 3, 7, 2, 8, -1, 4)

console.log(`VALORES EM SÉRIE\nO menor nº: ${minimo}\nO maior nº: ${maximo}`)

//E se os valores estiverem em um vetor
/* 1º CASO: SEM ESPALHAMENTO */
let numeros = [5, 3, 7, 2, 8, -1, 4]
let min = Math.min(numeros)
let max = Math.max(numeros)

console.log(`\nUTILIZANDO VETOR SEM ESPALHAMENTO\nO menor nº: ${min}\nO maior nº: ${max}`)

/* 2º CASO: COM ESPALHAMENTO */
let numeros2 = [5, 3, 7, 2, 8, -1, 4]
let min2 = Math.min(...numeros2)
let max2 = Math.max(...numeros2)

console.log(`\nUTILIZANDO VETOR COM ESPALHAMENTO\nO menor nº: ${min2}\nO maior nº: ${max2}`)

/*Outros Usos para o espalhamento*/
const carro1 = {
    modelo: 'Fusca',
    marca: 'Volkswagen',
    ano: 1970,
    cor: 'azul'
}

//COPIANDO CARRO1 PARA CARRO2
//NÃO FUNCIONA PARA COPIAR ==> const carro2 =  carro1 
const carro2 =  { ...carro1 } //FUNCIONA

//Mudando o valor das propriedades
carro2.modelo = 'Brasília'
carro2.cor = 'amarelo'
carro2.ano = 1972
carro2.marca = 'Ford'

console.log("\n------------ESPALHAMENTO NO OBJETO---------------")
console.log({carro1}, {carro2})

/* PROBLEMA: Juntar dois ou mais vetores em um novo */
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']
const verduras = ['Alface', 'Couve', 'Brócolis', 'Acelga']

const hortifruti = [...frutas, ...verduras]
console.log("\n------------JUNTANDO VETORES---------------")
console.log(hortifruti)


// PROBLEMA: Declarar uma função que recebe um nº arbitrário de parâmetros
function soma(...nums){
    let resultado = 0
    for (let n of nums) resultado += n
    return resultado
}

console.log(`\n-----------SOMANDO VALORES---------------`)
console.log(`Soma de 4 números: ${soma(4, 5, 6, 7)}\nSoma de 8 números: ${soma(1, 2, 3, 4, 5, 6, 7, 8)}`)
