let media = 7.6, situacao

if(media >= 6){
    situacao = 'Aprovado'
}
else{
    situacao = 'Reprovado'
}

console.log('Situação do aluno com média', media,'e', situacao)

/*
    Decidindo a situação do aluno com o operador ternário
*/

media = 5.1

situacao = media >= 6 ? 'Aprovado': 'Reprovado'

console.log('Situação do aluno com média', media,'e', situacao)


let user = 'guest', msg

// Decidindo se o usuario pode entrar, usando if..else
/* Quando há apenas uma linha após um if, um while, etc.. podemos omitir as chaves */

if (user === 'admin') msg = 'bem vindo'
else msg = 'acesso negado'

console.log(user, msg)

// Tomando a mesma decisão, mas usando o operador ternário
msg = user === 'admin' ? 'bem vindo' : 'acesso negado'
console.log(user, msg)
