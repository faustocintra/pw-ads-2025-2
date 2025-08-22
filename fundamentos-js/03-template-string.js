const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

//Mesclando strings com variaveis usando concatenação
let msg = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg)

//Mesclando strings e variaveis usando template string
//Template strings são OBRIGATORIAMENTE delimitadas por ``
// (acentos graves/backticks)
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

//Dentro de uma template string, não estamos limitados a usar apenas variaveis
//dentro do simbolo ${}. Qualquer codigo javascript válido pode ser empregado ali.
console.log(`Em ${2025 + 7}, ${nome.toUpperCase()} terá ${idade + 7} anos.`)