const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

// Mesclando strings com variáveis usando concatenação
let msg = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade
console.log(msg)

// Mesclando strings e variáveis usando template string
// Template string são OBRIGATORIAMENTE delimitados por ``
// (acentos graves/backticks)

let msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
console.log(msg2)

// Dentro de uma template string, não estamos limitados a usar apenas variáveis
// Dentro do simbolo ${}. Qualquer código JS válido pode ser empregado ali
console.log(`Em ${2025+7}, ${nome.toUpperCase()} terá ${idade + 7} anos`)