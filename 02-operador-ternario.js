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