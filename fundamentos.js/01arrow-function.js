/*Função tradicional com 1 parâmetro e 1 linha de corpo com return*/ 

function quadrado(n) {
    return n * n
}

console.log('[TRADI] O quadrado de 7 é ', quadrado(7))

/* 
    Função equivalente, usando a sintaxe arrow function
    => Não necessita de chaves 
    => Não necessita de parênteses em volta do parâmetro
    => Não necessita da palavra-chave "return"
    => A palavra-chave "function" é substituida pela flecha => LOGO APÓS o parâmetro 
    => A arrou funciton é invocada usando o nome da constante que a recebe em atribuição 
*/

const quadradoA = n => n * n 

console.log('[ARROW] O quadrado de 7 é ', quadradoA(7))


/*
    Função tradicional com mais de um parâmetro e apenas uma linha com return
*/

console.log('\n')

function calc(a, b, c)
{
    return a * b + c
}

console.log('[TRADI] O resultado do cálculo é', calc(10, 20, 30))

/*
    Equivalente em sintaxe arrou function
    => Quando o número e parâmetros É DIFERENTE DE 1, os parêmnteses voltam a ser obrigatórios
*/

const calcA = ( a, b, c) => a * b + c
console.log('[ARROW] O resultado do cálculo é', calcA(10, 20, 30))

console.log('\n')

/*
    Função tradicional sem parâmetros e uma linha de corpo com return 
*/

function msgErro()
{
    return "ERRO FATAL"
}

console.log('[TRADI] Mesangem de erro: ', msgErro())

/* 
    Eqiovalente na sintaxe arrow functionm
    => Parênteses vazios devem ser usados para marcar o lugar do parâmetro
*/

const msgErroA = () => 'ERRO FATAL'
console.log('[ARROW] Mensagem de erro:', msgErroA())

console.log('\n')

/*
    Função tradicional com um parâmetro e várias linhas de corpo
*/

function fatorial(x) 
{
    let resultado = 1
    for(let i = x; i > 1; i--) resultado *= i
    return resultado
}

console.log('[TRADI] O fatorial de 8 é', fatorial(8))

/*
    Equivalente na sintaxe arrow function
    => Não há economia de ,inhas no corpo da função. MESMO ASSIM, É COMUM ENCONTRAR ARROW FUNCTIONS DE VÁRIAS LINHAS EM PROJETOS REACT 
    => As chaves voltam a ser obrigatórias, assim como a palavra-chave "return"
*/

const fatorialA = x => {
                                                                                                         let resultado = 1
    for( let i = x; i > 1; i --) resultado *= i
    return resultado 
}

console.log('[ARROW] O fatorial de 8 é', fatorialA(8))
