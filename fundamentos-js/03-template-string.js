const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

// Mesclando strings com variáveis usando concatenação
const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg1) 

// Mesclando strings e variáveis usando template string
// Template strings são OBRIGATORIAMENTE delimitadas por ``
// (acentos graves/backticks)
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

// Dentro de uma template string, não estamos limitados a usar apenas variáveis
// dentro do símbolo ${}. Qualquer código JavaScript válido pode ser empregado ali.
console.log(`EM ${2025 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)