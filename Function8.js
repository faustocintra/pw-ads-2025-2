// find.js

// metodos de vetores find() encontro o PREIMEIRO ELEMENTO que correponda a leitura ao retorno de uma funçao passada como parametro 

const numeros =[12,19,3,-4,13,-11,15,-1,0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jaboticaba', 'maracuja']

// Encontrando o primeiro numero negativo no vetor de nuemros 
console.log('Primeiro numero negativo: ', numeros.find(n => n < 0)) //  lembrar de sempre colocar o ( = ) antes do sinal de maior para indicar a flecha 

// encontrando o primeiro numero multiplo de 5 

console.log('Primeiro multiplo de 5: ', numeros.find(x => x % 5 === 0 ))

// encontrando o primeiro numero naior que 20 

console.log('Primeiro numero maior que 20: ', numeros.find(i => i > 20))

// Encontrando a primeira fruta que começa com "m"
console.log('Primeira fruta começando com a letra m: ', frutas.find(f => f.charAt(0) === 'm'))

// Encontrando a primeira fruta que termina com "r"
console.log('Primeira fruta começando com a letra r: ', frutas.find(f => f.slice(-1) === 'r'))

// function 9 filter 

/* o metodo de vetores filter() cria um NOVO VETOR contendo apenas os elementos 
   que atendem ao criterio aoresentado pela funçao passada como parametro
   */

   const numero =[12,19,3,-4,13,-11,15,-1,0]
   const fruta = ['laranja', 'abacaxi', 'maça', 'uva', 'jaboticaba', 'maracuja']

   // Cria um novo vetor apenas com os numeros negativos , o filter pega todos os numeros que atendem ao criterio 
   console.log('Apenas numeros negativos: ', numero.filter(h => h < 0))

   // Cria um novo vetor apenas com os numeros pares 
   console.log('Apenas numeros pares: ', numero.filter(i => i % 2 === 0))

 // Cria um novo vetor apenas cm numeros maiores que 20 
 console.log('Apenas numeros maiores que 20: ', numero.filter(i => i > 20 ))

 // sua ideia e sempre retornar um vetor idependente do que for se esta vazio ou nao 

 // Cria um novo vetor com apenas as frutas que começem com a letra 'm' 
 console.log('Apenas frutas com inicial m: ', fruta.filter(h=>h.charAt(0) ==='m'))


// Cria um novo vetor com apenas as frutas que terminem com a letra 'r' 
console.log('Apenas frutas com inicial m: ', fruta.filter(h=>h.slice(-1) ==='r'))




   