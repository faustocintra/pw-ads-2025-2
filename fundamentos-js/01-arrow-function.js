/* Função tradicional com 1 parâmetro e 1 linha de corpo com return */
function quadrado(n) {
  return n * n
}

console.log('[TRADI] O quadrado de 7 é', quadrado(7))

/*
  Função equivalente, usando a sintaxe arrow function
  ~> não necessita de chaves
  ~> não necessita de parênteses em volta do parâmetro
  ~> não necessita da palavra-chave "return"
  ~> a palavra-chave "function" é substituída pela flecha
     => LOGO APÓS o parâmetro
  ~> a arrow function é invocada usando o nome da constante
     que a recebe em atribuição
*/

const quadradoA = n => n * n

console.log('[ARROW] O quadrado de 7 é', quadradoA(7)) 

/* Função tradicional com mais de um parâmetro e apenas uma
   linha com return
*/
function calc(a, b, c) {
  return a * b + c
}
console.log('[TRADI] O resultado do cálculo é', calc(10, 20, 30))

/*
  Equivalente em sintaxe arrow function
  ~> quando o número de parâmetros é DIFERENTE DE 1, os
     parênteses voltam a ser obrigatórios
*/
const calcA = (a, b, c) => a * b + c
console.log('[ARROW] O resultado do cálculo é', calcA(10, 20, 30))

/*
  Função tradicional sem parâmetros e uma linha de corpo com return
*/
function msgErro() {
  return 'ERRO FATAL!'
}
console.log('[TRADI] Mensagem de erro:', msgErro())

/*
  Equivalente na sintaxe arrow function
  ~> parênteses vazios devem ser usados para marcar o lugar do parâmetro
*/
const msgErroA = () => 'ERRO FATAL!'
console.log('[ARROW] Mensagem de erro:', msgErroA())

/*
  Função tradicional com um parâmetro e várias linhas de corpo
*/
function fatorial(x) {
  let resultado = 1
  for(let i = x; i > 1; i--) resultado *= i
  return resultado
}
console.log('[TRADI] O fatorial de 8 é', fatorial(8))

/*
  Equivalente na sintaxe arrow function
  ~> Não há economia de linhas no corpo da função. MESMO ASSIM, É COMUM
     ENCONTRAR ARROW FUNCTIONS DE VÁRIAS LINHAS EM PROJETOS REACT
  ~> As chaves voltam a ser obrigatórias, assim como a palavra-chave
     "return"
*/
const fatorialA = x => {
  let resultado = 1
  for(let i = x; i > 1; i--) resultado *= i
  return resultado
}
console.log('[ARROW] O fatorial de 8 é', fatorialA(8))