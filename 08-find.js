/*
 O Método find() retorna o primeiro elemento que satisfaz a condição fornecida na função de teste
*/

const numeros = [5, 12, 8, 130, 44, 3, 56, -5];
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'kiwi', 'Jabuticaba'];

// Encontrando o primeiro nº no vetor
console.log(` VETOR: {${numeros}}\n
- Primeiro nº negativo: ${numeros.find(n => n < 0)}
- Primeiro nº maior que múltiplo de 5: ${numeros.find(n => n > 5 && n % 5 === 0)}
- Primeiro nº maior que 20: ${numeros.find(n => n > 20)}
- Primeiro nº Par: ${numeros.find(n => n % 2 === 0)}
`)

console.log(` VETOR: {${frutas}}\n
- Primeira fruta que começa com a letra 'J': ${frutas.find(f => f.startsWith('J'))}
- Primeira fruta que tem mais de 5 letras: ${frutas.find(f => f.length > 5)}
- Primeira fruta que termina com a letra 'a': ${frutas.find(f => f.endsWith('a'))}
- Primeira fruta que tem a letra 'b': ${frutas.find(f => f.includes('b'))}
`)