//encontrando o maior e o menor valor em uma série
let minimo = Math.min(2, -5, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0, 11, -1)

console.log(minimo, maximo)

// e se a série de numeros estiver em um vetor?
const nums = [2, -5, 4, 0, 11, -1]

minimo = Math.min(nums)
maximo = Math.max(nums)

// Math.min() e max() não conseguem trabalhar com os números estando em um vetor 
console.log(`Valores no vetor:`, {minimo, maximo})


/*
    A sintaxe de esplanhamento (spreading), representada por ... antes do nome variável, é capaz de "desempacotar" um vetor em uma série de valores avulsos
*/

minimo = Math.min(...nums)
maximo = Math.max(...nums)
console.log(`Valores apos espalhamento:`, {minimo, maximo})

// outros usos para a sintaxe de espalhamento

const carro1 = {

    modelo: 'fiorino',
    marca: 'fiat',
    ano: 1984,
    cor: 'bege'
}

/*
// copiando carro1 para carro2
const carro2 = carro1 

// mudando o valor das propriedades de carro2
carro2.modelo = 'fusca'
carro2.marca = 'volkswagen'
carro2. ano = 1969
carro2.cor = 'preto'

// exibindo ambos os carros
console.log(carro1, carro2)
*/
// em objetos a simples utilização do '=' cria uma nova instanciação do objeto original e não sua cópia. Ex: objeto1 = objeto2 ... objeto2.atributo = novovalor... não se criou e nem modificou realmente o objeto2 pois ele é só uma instancia do objeto1
// copiando carro1 para carro2 
// const carro2 = carro1 // não funciona para copiar

//forçando a cópia de um objeto usando espalhamento
const carro2 = {...carro1}
carro2.modelo = 'fusca'
carro2.marca = 'volkswagen'
carro2. ano = 1969
carro2.cor = 'preto'

// exibindo ambos os carros
console.log(carro1, carro2)

/* problema: juntar dois ou mais vetores em um novo vetor */

const frutas = ['maçã', 'banana', 'laranja', 'uva']
const verduras = ['alface', 'couve', 'rúcula', 'acelga']

const hortifruti = [...frutas, ...verduras]

console.log({hortifruti})

/* problema: declarar uma função que recebe um número arbitrário de parâmetros */

function soma(...nums){
    // nums é recebido dentro da função como um vetor
    let resultado = 0
    for(let n of nums) resultado += n
    return resultado
}

console.log(`Soma de 4 números: ${soma(1, 2, 3, 4)}`)
console.log(`Soma de 7 números: ${soma(11, 22, 33, 44, 55, 66, 77)}`)