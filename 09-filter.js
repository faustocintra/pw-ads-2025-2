const numeros = [5, 12, 8, 130, 44, 3, 56, -5, 32, -3, -7];
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'kiwi', 'Jabuticaba'];

console.log(`VETOR: ${numeros}\n
    - Nº Negativos: {${numeros.filter(n => n < 0)}}
    - Nº Pares: {${numeros.filter(n => n % 2 === 0)}}
    - Nº Ímpares: {${numeros.filter(n => n % 2 !== 0)}}
    - Nº Maiores que 10: {${numeros.filter(n => n > 10)}}
    `);

console.log(`VETOR: ${frutas}\n
    - Frutas que começam com a letra 'J': {${frutas.filter(f => f.startsWith('J'))}}
    - Frutas que têm mais de 5 letras: {${frutas.filter(f => f.length > 5)}}
    - Frutas que terminam com a letra 'a': {${frutas.filter(f => f.endsWith('a'))}}
    - Frutas que têm a letra 'b': {${frutas.filter(f => f.includes('b'))}}
    - Frutas que tem a inicial "m": {${frutas.filter(f => f.charAt(0) === 'm')}}
    `);