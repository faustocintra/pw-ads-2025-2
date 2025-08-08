let media = 7.6, situacao

if(media >= 6){
    situacao = 'APROVADO'
}
else{
    situacao = 'Reprovado'
}
console.log('Situação do aluno com média', media, 'é', situação)

media = 5.1

/*
    Decidindo a situação do aluno usando operador ternário
*/
situação = média >=6 ? 'APROVADO' : 'Reprovado'

console.log('Situação do aluno com média', media, 'é', situação)