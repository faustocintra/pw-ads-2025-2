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