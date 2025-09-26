/*
    reduce() é um método de vetores que REDUZ o vetor a um único valor.
    Para isso, aplica uma função a cada elemento do vetor, a qual efetua uma operação 
    sobre o elemento e acumula o resultado a cada passada
*/

const numeros = [12,19,3,-4,13,-11,15,-1,0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']
const nums2 = [1,2,3,4,5,6]

/*
Usando reduce() para somar todos os elementos do vetor numeros
A função de callback do reduce(), em sua forma mais simples, possui dois parâmetros:
1º ~> é o acumulador, que armazena o resultado das operações sobre os elementos anteriores
2° ~> corresponde ao elemento que está sendo processado no momento
*/

const soma = numeros.reduce((acum,el) => acum + el) //acumulador + elemento da vez
console.log('Soma de todos os elementos do vetor "numeros":', soma)


const produto = numeros.reduce((a,e) => a * e)
const mult = nums2.reduce((acum,el) => acum + el) //acumulador + elemento da vez
console.log('Produto de todos os elementos do vetor "nums2":', produto)

//Concatenando o vetor de frutas em uma única string, separando os elementos por ';'
// e convertendo para maiúsculas
const stringFrutas = frutas.reduce((acc, el)=> acc.toUpperCase() + ';' + el.toUpperCase())
console.log(stringFrutas) 

const stringFrutas2 = frutas.reduce((acc, el)=> {
    console.log(`Acumulador: "${acc}"; elemento: "${el}"`)
    return acc.toUpperCase() + ';' + el.toUpperCase()  
})
console.log(stringFrutas2)

console.log('-'.repeat(80))

//refazendo a soma do vetor numeros mostrando os valores intermediários do acumulador
const soma2 = numeros.reduce((acum, el)=> {
    console.log(`Acumulador: ${acum}; elemento: ${el}`)
    return acum + el
})    
