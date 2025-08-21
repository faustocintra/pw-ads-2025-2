const carros = ['Fusca', 'Civic', 'Celta', 'Palio', 'Gol'];
/*
O método includes() verifica se um array contém um determinado elemento.
Retorna true se o elemento for encontrado e false caso contrário.
*/
console.log(`CARROS: ${carros}
    Existe o carro 'Civic'? ${carros.includes('Civic')}
    Existe o carro 'Fusca'? ${carros.includes('Fusca')}
    Existe o carro 'Fastback'? ${carros.includes('Fastback')}
`)

/*
O método indexOf() retorna o índice (posição) da primeira ocorrência de um elemento em um array.
Retorna -1 se o elemento não for encontrado.
*/
console.log(`CARROS: ${carros}
    Índice do carro 'Civic': ${carros.indexOf('Palio')}
    Índice do carro 'Fusca': ${carros.indexOf('Gol')}
    Índice do carro 'Fastback': ${carros.indexOf('Fastback')}
`)

/*
Usando o indexOF() podemos testar a existência de um elemento no vetor
--> Esse método era utilizado antes do includes()
*/
console.log(`CARROS: ${carros}
    Existe o carro 'Civic'? ${carros.indexOf('Civic') !== -1}
    Existe o carro 'Fusca'? ${carros.indexOf('Fusca') !== -1}
    Existe o carro 'Fastback'? ${carros.indexOf('Fastback') !== -1}
`)