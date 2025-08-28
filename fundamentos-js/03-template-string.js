const nome = 'Raissa'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

// Mesclando strings com variaveis usando concatenação
let msg = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg)

// Mesclando strings e variáveis usando template string
// Template strings são OBRIGATORIAMENTE delimitadas por ''
// (acentos graves/backticks)

const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

// Dentro de uma template string, não estamos limitados a usar apenas varáveis
// Dentro do simbolo ${}. Qualquer código JavaScript valido pode ser empregado ali
console.log(`Em ${2025 + 7}, ${nome.toUpperCase()} terá ${idade + 7} anos.`)

