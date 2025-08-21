// include-index-Of.js 

const carros = ['chevette', 'fusca', 'opala', 'maverick', 'belina', 'del rey']

/* Metodo includes() testa se um determinado elemento existe em um vetor retornando true(se existir) ou false(se nao existir)
o metodo includes() foi adicionado ao javascript apenas em setembro de 2016 */

console.log('Tem fusca ? ', carros.includes('fusca'))
console.log('Tem corcel ? ', carros.includes('corcel'))
console.log('Tem  belina ? ', carros.includes('belina'))

// o metodo indexOf retorna o indice( posiçao ) de um elemento do vetor caso o elemento nao exista retorna -1 

console.log('Tem fusca ? ', carros.indexOf('maverick'))
console.log('Tem corcel ? ', carros.indexOf('chevette'))
console.log('Tem  belina ? ', carros.indexOf('kombi'))

// usando indexOf() para testar a existencia de um elemento no vetor ( como se fazia quando ainda nao havia o metodo includes())


console.log('Tem fusca ? ', carros.indexOf('fusca')>=0)
console.log('Tem corcel ? ', carros.indexOf('corcel')>=0)
console.log('Tem  belina ? ', carros.indexOf('belina')>=0)




