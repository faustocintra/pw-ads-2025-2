const carros = ['Chevette', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*
    O método incluides() teste se um determinado elemento existe em um vetor. Retorna true se existe,
    ou false, caso contrario.
    O método includes() foi adicionado ao JavaScript apenas em setembro de 2016.
*/

console.log('Tem Fusca?', carros.includes('Fusca'))
console.log('Tem Corcel?', carros.includes('Corcel'))
console.log('Tem Belina?', carros.includes('Belina'))

/*
    O método infexOf() retorna o indice (posição) de um elemento no vetor. Caso o elemento não exista, retorne -1.
*/

console.log('Posição do Maverick: ', carros.indexOf('Maverick'))
console.log('Posição do Chevette: ', carros.indexOf('Chevette'))
console.log('Posição da Kombi: ', carros.indexOf('Kombi'))

/*
    Usando indexOf para testar a existência de um elemento no vetor(como se fazia quando ainda não havia o metodo includes)
*/

console.log('Tem Fusca?', carros.indexOf('Fusca') >= 0)
console.log('Tem Corcel?', carros.indexOf('Corcel') >= 0)
console.log('Tem Belina?', carros.indexOf('Belina') >= 0)