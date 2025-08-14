const nome = 'Valeria'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

// Mesclando strings com variáveis usando concatenação
const msg = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em: ' + cidade + '.'

console.log(msg)

// Mesclando strings e variáveis usando template string
// Template strings são OBRIGATÓRIAMENTE delimitadas por `` 

const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em: ${cidade}.`

console.log(msg2)

// Dentro de um template string não estamos limitados a usar apenas variáveis
// Dentro do símbolo ${} Qualquer código JS válido pode ser empregado ali

console.log(`EM ${2025 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS`)