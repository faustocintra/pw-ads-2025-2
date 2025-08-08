function quadrado(n){
    return n*n 
}
console.log('TRADI o quadrado de 7 e ', quadrado(7))

/* funçao equivalente , usando a sintaxe arrowq function
> Nao nescessita de chaves 
> Nao nescessita de parenteses em volta do parametro 
> Nao nescessita da palavra -chave 'Return'
> A palavra chave "Function" e subistuida  pela a flecha (=>) logo a pois o parametro  
> a arrow function e invocada usand  o nome da constante que recebe em atribuiçao 

*/

const quadradoA = n => n*n 

console.log('[ARROW] o quadrado de 7 e ', quadradoA(7))
/* a Funçao tradicional com ,mais de um parametro e apenas uma linha com return
*/

function Calc(a,b,c){
    return a * b + c
}

console.log('[TRADI] o resultado do calculo e ', Calc(10,20,30))

/* O equivalente en suxtaxe arrow function quando o numero de parametros e diferente de 1, os parenteses voltam a ser obriogatorios 
ex: functoin calc(n) apenas um sem declarar os parametros  ja para euivaler com mais de 1 ex: cal(a,b,c) 
*/

const CalcA = (a,b,c) => a*b+c 
console.log('[ARROW] o resultado do calculo e ', CalcA(10,20,30))

/* fUNÇAO TRADICONAL SEM PARAMETROS E UMA LINHA DE CORPO COM RETURN 
*/

function msgError(){
    return 'ERRO FATAL!'
}

console.log('[TRADI] Mensagem de erro ', msgError())

/* Equivalente na sintaxe arrow function 
> parenteses vazios devem ser usados para marcar o lugar do parametro 
*/

const msgErrorA = () => 'ERROR FATAL'
console.log('[ARROW] Mensagem de erro:' , msgErrorA())

//Funçao tradicional com um parametro e varias linhas de corpo 

function fatorial(x){
    let  resultado = 1
    for( let i = x; i>1;i--)resultado *= i
    return resultado
}
    console.log('[TRADI] o fatotrial de 8 e:',fatorial(8))

    /* Equivalentes na sintaxe arrow function 
    >> Nao ha economia de corpo da funçao mesmo assim e comum  ENCONTRAR A ARROW FUNCTIONS DE VARIAS LINHAS EM PROJETOS REACT 
    >> As chaves volta a ser obrigatorias assim com a palvra chave 'Retrunn"
*/

const fatorialA = x => {
    let resultado = 1 
    for(let i =x ; i>x; i--) resultado *= i 
    return resultado
}

console.log('[ARROW] o fatotrial de 8 e:',fatorialA(8))


    



