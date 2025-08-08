
// função tradicional com 1 parâmetro e 1 linha de corpo com return

function quadrado (n){
    return n * n
}

console.log('[TRADI] o quadrado de 7 é ', quadrado(7))

/* função equivalente usando a sintaxe em arrow function:
    - não necessita de chaves
    - não necessita de parenteses em volta do parâmetro
    - não necessita da palavra-chave "return"
    - a palavra chave "function" é susbtituida pela flecha => LOGO APÓS o parâmetro
    - a arrow function é invocada usando o nome da constante que a recebe em atribuição
    - quando a quantidade de parâmetros é diferente de 1 o uso de parênteses é obrigátorio (seja 0 ou maior que 1)
    - quando o corpo da arrow function supera 1 linha o uso das chaves volta a ser obrigatorio, assim como a palvra chave return ~ou seja, a cedralação se mantem de aarrow function 
    mas a estrutura do corpo fica igual ao de uma função normal
    - apesar de não haver economia de linhas no corpo de uma arrow function com o cropo maior de 1 linha NO REACT ainda é comum encontrar arrow functions de várias linhas
*/

const quadrado2 = n => n * n

console.log('[ARROW] o quadrado de 7 é ', quadrado2(7))

// 3 p - normal
function calc1(n, m, p){
    return n + m + p
}
console.log('[ARROW COM 3 PARÃMETROS] a soma de 1, 2, 3:', calc1(1,2,3))

// 3 p - arrow
const calc2 = (n,p, m) => n + m + p

console.log('[ARROW COM 3 PARÃMETROS] a soma de 1, 2, 3:', calc2(1,2,3))

// 0 p - arrow
const msError = () => 'ERRO'

console.log(msError())

// não existe içamento/hoisting em arrow functions, dara erro!

