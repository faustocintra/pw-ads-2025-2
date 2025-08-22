const carros = ['Chevete', 'Fusca', 'Opala', 'Maverick', 'Belina', 'Del Rey']

/*
    O metodo includes() testa se um determina elemento existe
    em um vetor. Retorna true se existir, ou false, caso contrario.
    O metodo includes() foi adicionado ao JavaScript apenas em setembro 2016
*/

console.log('Tem Fusca?', carros.includes('Fusca'))
console.log('Tem Corcel?', carros.includes('Corcel'))
console.log('Tem Belina?', carros.includes('Belina'))

/*
    O metodo indexOf() retorna o indice(posição) de um elemento no vetor.
    Caso o elemento não exista, retorna -1
*/
console.log('Posição do Maverick:', carros.indexOf('Maverick'))
console.log('Posição do Chevete:', carros.indexOf('Chevete'))
console.log('Posição do Kombi:', carros.indexOf('Kombi'))

/*
    Usando indexOf para testar a existencia de um elemento no
    vetor (como se fazia quando ainda não havia o metodo includes)
*/
console.log('Tem Fusca?', carros.indexOf('Fusca') >= 0)
console.log('Tem Corcel?', carros.indexOf('Corcel') >= 0)
console.log('Tem Belina?', carros.indexOf('Belina') >= 0)

