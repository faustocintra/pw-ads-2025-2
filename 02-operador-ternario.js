let media = 7.6, situacao

if(media >= 6){
    situacao = "Aprovado"
}
else{
    situacao = "Reprovado"
}

console.log('Situação do aluno com média', media,'e', situacao)

/*
    Decidindo a situação do aluno com o operador ternário
*/

media = 5.1

situacao = media >= 6 ? 'Aprovado': 'Reprovado'

console.log('Situação do aluno com média', media,'e', situacao)
