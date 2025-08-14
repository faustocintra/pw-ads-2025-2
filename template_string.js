const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'

//mesclando string com váriaveis usando concatenação
let msg = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg)

// mesclando strings e varriaveis usando template string 
// template string são obrigatoriamente delimitadas por ''
//(acentos graves/backticks)
const msg2 = `meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

// dentro de uma template string, não estamos limitados a usar apenas váriaveis
// dentro do simbolo ${}. QUalquer código javascript pode ser e,pregado ali.
console.log(`em ${2025+7}, ${nome.toUpperCase()} terá ${idade+7} anos`)