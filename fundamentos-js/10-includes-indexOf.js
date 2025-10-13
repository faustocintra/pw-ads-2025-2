const carros = ['Chevette','Fusca','Opala','Maverick','Belina','Del Rey']

/*
    O método includes() teste se um determinado elemento existe
    em um vetor. Retorna true se existir, ou false, caso contrário
*/

console.log('Tem fusca?', carros.includes('Fusca'))
console.log('Tem corcel?', carros.includes('Corcel'))
console.log('Tem belina?', carros.includes('Belina'))

/*
    O método indexOf() retorna o índice (posição) de um elemento
    no vetor. Caso o elemento não existe, retorna -1
*/

console.log('Posição do Maverick:', carros.indexOf('Maverick'))
console.log('Posição do Chevette:', carros.indexOf('Chevette'))
console.log('Posição da Kombi:', carros.indexOf('Kombi'))

/*
    Usando o indexOf() para testar a existencia de um elemento no vetor (como se
    fazia quando ainda não havia o método includes())
*/

console.log('Tem fusca?', carros.indexOf('Fusca') >= 0)
console.log('Tem corcel?', carros.indexOf('Corcel') >= 0)
console.log('Tem belina?', carros.indexOf('Belina') >= 0)