let media = 7.6, situacao

if (media >= 6 ) 
{
    situacao = "APROVADO"
}

else 
{
    situacao = "REPROVADO"
}

console.log('Situaçãop do aluno com média', media, 'é', situacao)

console.log('\n')

media = 5.1

/*
    Decidindo a situação do aluno usando o operador ternário 
*/

situacao = media >= 6 ? 'Aprovado' : 'Reprovado'

console.log('Situação do aluno com média', media, 'é', situacao)
/* ******************************************************************************************************** */

// Decidindo se o usuário pode entrar, usando if...else

/*
    Quando há apenas uma linha após um if, um while, etc., podemos omitir as chaves 
*/

if(user === 'admin') msg = 'Bem-Vindo!'
else msg = 'Acesso Negado!'

console.log(use, msg)

// Tomando a mesma decisão, mas usando o operador ternário
msg = user === 'admin' ? 'Bem-Vindo!' : 'Acesso Negado' 

console.log(user, msg)