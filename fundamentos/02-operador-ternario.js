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

// Decidindo se o usuário