const nome = 'Isabel'
const idade = 22
const cidade = 'Belo Horizonte'

// USANDO CONCATENAÇÃO
const msg = 'Olá, meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade
console.log("Concatenada:\n" + msg)

// USANDO TEMPLATE STRINGS
const msg2 = `\nOlá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log("\nTemplate String:" + msg2)

// Dentro de uma template string, não estamos limitados a usar apenas variáveis
// Dentro do símbolo ${} pode-se colocar qualquer expressão JavaScript
console.log(`\nEm ${2025 + 7}, ${nome.toUpperCase()} terá ${idade + 7} anos.`)