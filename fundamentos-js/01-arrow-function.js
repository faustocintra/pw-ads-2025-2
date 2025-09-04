//Função tradicional com 1 parâmetro

function quadrado(n){
    return n * n
}

console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*
    Função equivalente usando a arrow function
    ~> Não necessita de chaves
    ~> O parâmetro não exige parênteses
    ~> Não necessita de usar o "return"
    ~> A palavra-chave é substituída por "=>"
        => LOGO após o parâmetro
    ~> A arrow function é invocada usando o nome da constante que a recebe em atribuição
*/

const quadradoA = n => n*n

console.log('[ARROW] O quadrado de 7 é', quadradoA(7))

//Função tradicional com mais de 1 parâmetro
function calc(a, b, c){
    return a * b + c
}
console.log('[TRADI] O resultado do cálculo é', calc(10, 20, 30))

/*
    Equivalente em sintaxe arrow function
    ~> quando o número de parâmetros for DIFERENTE de 1, os parênteses voltam a ser obrigatórios
*/

const calcA = (a, b, c) => a * b + c
console.log('[ARROW] O resultado do cálculo é', calcA(10, 20, 30))

//Função tradicional sem parâmetros e uma linha de corpo com return
function msgError(){
    return 'Erro 404'
}
console.log('[TRADI] Mensagem de erro:', msgError())

/*
    Equivalente na sintaxe arrow function
    ~> parênteses vazios devem ser usados para marcar o lugar do parâmetro
*/

const msgErrorA = () => 'Erro 404'

console.log('[ARROW] Mensagem de erro:', msgErrorA())

//Função tradicional com 1 parâmetro e várias linhas de corpo

function fatorial(x){
    let resultado = 1
    for(let i = x; i>1; i--) resultado *= i
    return resultado
}
console.log('[TRADI] O fatorial de 8 é', fatorial(8))

/*
    Equivalente em sintaxe arrow function
    ~> Não há economia de linhas no corpo da função. MESMO ASSIM, É COMUM ENCONTRAR ARROW FUNCTIONS DE VÁRIAS LINHAS EM PROJETOS REACT
    ~> As chaves voltam a ser obrigatórias, assim como a palavra-chave "return"
*/

const fatorialA = x => {
    let resultado = 1
    for(let i = x; i>1; i--) resultado *= i
    return resultado
}
console.log('[ARROW] O fatorial de 8 é', fatorialA(8))

//Com funções tradicionais é possível chamá-las em linhas anteriores à sua declaração, com funções arrow isso não é possível, pois se comportam como variáveis
