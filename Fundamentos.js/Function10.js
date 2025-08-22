// include-index-Of.js 

const carros = ['chevette', 'fusca', 'opala', 'maverick', 'belina', 'del rey']

/* Metodo includes() testa se um determinado elemento existe em um vetor retornando true(se existir) ou false(se nao existir)
o metodo includes() foi adicionado ao javascript apenas em setembro de 2016 */

console.log('Tem fusca ? ', carros.includes('fusca'))
console.log('Tem corcel ? ', carros.includes('corcel'))
console.log('Tem  belina ? ', carros.includes('belina'))


console.log('-'.repeat(80))

// o metodo indexOf retorna o indice( posiçao ) de um elemento do vetor caso o elemento nao exista retorna -1 

console.log('Tem fusca ? ', carros.indexOf('maverick'))
console.log('Tem corcel ? ', carros.indexOf('chevette'))
console.log('Tem  belina ? ', carros.indexOf('kombi'))
console.log('-'.repeat(80))


// usando indexOf() para testar a existencia de um elemento no vetor ( como se fazia quando ainda nao havia o metodo includes())


console.log('Tem fusca ? ', carros.indexOf('fusca')>=0)
console.log('Tem corcel ? ', carros.indexOf('corcel')>=0)
console.log('Tem  belina ? ', carros.indexOf('belina')>=0)

console.log('-'.repeat(80))

// 11 Map 

/* o metodo de vetores map() cria um vetor no qual cada elemento corresponde a uma transformaçao do elemento 
do vetor original , a transformaçao e controlada pela funçao passada como parametro o  novo vetor gerado por map()
tera sempre o mesmo numero de elementos do vetor original */

const numero =[12,19,3,-4,13,-11,15,-1,0]
const fruta = ['laranja', 'abacaxi', 'maça', 'uva', 'jaboticaba', 'maracuja']

//gerando um vetor em cada elemento corresponde ao valor do elemento original elevado ao quadrado 

const quadrados = numero.map(n => n ** 2)
console.log('Vetor com numeros ao quadrado: ', quadrados)
console.log('-'.repeat(80))

// map() que transforma os elementos do vetor original em itens de lista para uso em uma pagina HTML
// (aplicaçao frequente em React )

const itensLista = fruta.map(f => `</li> ${f} </li>`)
console.log('Vetor com itens de lista: ', itensLista)
console.log('-'.repeat(80))

console.log('<h1> FRUTAS ENCONTRADAS NO BRASIL <h1>')
console.log('<u1>')
for(const item of itensLista) console.log('  ', item)
console.log('<u>')
