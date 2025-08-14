const nome = 'Fabio'
const idade = 46
const cidade = 'Xique-Xique/BA'

//Mescalndo strings com variáveis usando concatenação
const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg1) //Se usar a string dentro do console.log é possível usar a ',' invés do +

/*
    Mescalndo strings e variáveis usando template string
    Template strings são obrigatoriamente delimitados por ``
    (acentos graves/backticks/crase)
*/

const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

/*
    Dentro de uma template string não estamos limitados a usar apenas variáveis
    Qualquer código JavaScript válido pode ser empregado dentro do símbolo ${}
*/

console.log(`EM ${2025 + 7}, ${nome.toUpperCase()}, TERÁ ${idade + 7} ANOS.`)