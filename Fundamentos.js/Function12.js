// // reduce 

// reduce() e um metodo de vetores que REDUZ o vetor a um unico valor , para isso 
// aplica uma funçao a cada elemento do vetor a qual efetua uma operaçao sobre o elemento 
// e acumala o rersultado a cada passada  

const numero =[12,19,3,-4,13,-11,15,-1,0]
const fruta = ['laranja', 'abacaxi', 'maça', 'uva', 'jaboticaba', 'maracuja']
const num2=[1,2,3,4,5,6]

/*
Usando reduce() para somar todos os elementos do vetor numeros a funçao de callback do reduce()
em sua forma mais simples possui dois parametros:
1° -> e o acumulador que armazena o resultado das operaçoes sobre os elementos anteriores 
2° -> corresponde ao elemento que esta sendo processado no momento 
*/

const soma = numero.reduce((acum, el) => acum + el)
console.log('Soma todos os elementos do vetor nuemro :', soma)

console.log('--'.repeat(80))

// reduce() para multiplicar os elementos de num2
const produto = numero.reduce((a, e) => a * e)
console.log('Soma todos os elementos do vetor nuemro :', produto)

console.log('--'.repeat(90))

//concatenando o vetor de frutas em uma unica string , separando os elementos por ' ; ' e covertendo para maisculas 
const stringfrutas = fruta.reduce((acc, el) => acc.toUpperCase() + ';' + el.toUpperCase())
console.log(stringfrutas)
console.log('-'.repeat(90))

// refazendo a soma do vetor numero mostrando os valores intermediarios acumulado 
const suma = numero.reduce((acum,el) => {console.log(`Acumulador: ${acum}; elemento: ${el}`) 
return acum + el } ) 
console.log('Soma de todos os elementos do vetor numero: ', suma)
console.log('--'.repeat(90))

// refazendo agora com o vetor de string de frutas 

const str = fruta.reduce((acc,el) => {console.log(`Acumulador: ${acc}; elemento: ${el}`)

return acc.toUpperCase() + ' ; ' +  el.toUpperCase() } ) 

console.log(str)