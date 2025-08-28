const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro ALto de Cima/MG'

//Mesclando strings com variáveis usando concatenação
let msg = 'Meu nome é' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg)

//Mesclando strings com variáveis usando template string
//Tamplate strings são OBRIGATORIAMENTE delimitadas por crase ´´ (backticks)
msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

//Dentro de uma template string não estamos limitados a usar apenas variáveis
//Dentro do símbolo ${}. Qualquer código JavaScript válido pode ser empregado ali.
console.log(`Em ${2025 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)
