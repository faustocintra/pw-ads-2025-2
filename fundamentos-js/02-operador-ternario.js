let media = 7.6, situacao

if(media >=6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}
console.log('Situação do aluno com média', media, 'é', situacao)

media = 5.1

/*Decidindo situação do aluno usando operador ternário*/
situacao = media >= 6 ? 'APROVADO' : 'REPROVADO'
console.log('Situação do aluno com média', media, 'é', situacao)

/*****************************************************************/

let user = 'gest', msg
//decidindo se o usuário pode entrar, usando if..else
/* Quando há apenas uma linha após if, while, etc..., podemos omitir as chaves */
if(user === 'admin') msg = 'Bem vindo!'
else  msg = 'Acesso negado'
console.log(user,msg)

//Tomando amesma decisão, mas usando o operador ternário
msg = user === 'admin' ? 'Bem vindo!' : 'Acesso negado'
console.log(user, msg)