let media = 7.6, situacao
 
if(media >= 6) {
    situacao = 'APROVADO'
}
else{
    situacao = 'Reprovado'
}
 
console.log('Situação do aluno com média', media, 'é', situacao)
 
media = 5.1
/* Decidindo a situação do aluno usando o operador ternário */
situacao = media >= 6 ? 'Aprovado' : 'Reprovado'
console.log('Situação do aluno com média', media, 'é', situacao)
 
 
let user = 'guest', msg
 
// Decidindo se o usuário pode entrar | IF - ELSE
/*
Quando há apenas uma linha após um If, else, while, etc. Podemos omitir as chaves
*/ 

if(user === 'admin') msg = 'Bem-vindo, admin!'
else msg = 'Acesso negado!'

console.log(user, msg)

// Mesma decisão usando operador ternário
msg = user === 'admin' ? 'Bem-vindo, admin!' : 'Acesso negado!'
console.log(user, msg)