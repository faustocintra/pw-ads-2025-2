const carros = ['chevette', 'fusca', 'opala', 'Maverick', 'Belina', 'Del Rey']

// o método includes() testa se um determinado elemento existe em um vetor. Retorna true se existir, ou false caso contrário o méotodo includes() foi adicionado ao Javascript apenas
// em setembro de 2016
console.log('Tem fusca? ', carros.includes('Fusca'))
console.log('Tem Corcel? ', carros.includes('Corcel'))
console.log('Tem Belina? ', carros.includes('BeLina'))

// o método indexOf() retorna o índice (posição) de um elemnto no vetor. Caso o elemento não existe, retorna -1.
console.log('Posição do Maverick: ', carros.indexOf('Maverick'))
console.log('Posição do Chevette: ', carros.indexOf('Chevette'))
console.log('Posição da Kombi: ', carros.indexOf('Kombi'))

// usando indexOf() para testar a existência de um elemento no vetor (como se fazia quando ainda não havia o méotodo includes()) 
console.log('Tem fusca?: ', carros.indexOf('Fusca') >= 0)
console.log('Tem Corcel?: ', carros.indexOf('Corcel')>= 0)
console.log('Tem Belina?: ', carros.indexOf('Belina')>= 0)