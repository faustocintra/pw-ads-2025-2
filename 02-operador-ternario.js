// 1ª Forma:

let media = 7.6, situacao

if(media >= 6){
    situacao = 'APROVADO'
}
else{
    situacao = 'REPROVADO'
}

console.log('Situação do aluno com média:', media, 'é', situacao)

// 2ª Forma:

let media2 = 5.4

if (media2 >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'

console.log('Situação do aluno com média:', media2, 'é', situacao)

// 3ª Forma (Operador ternário):

let media3 = 6.7

situacao = media3 >= 6 ? 'APROVADO' : 'REPROVADO'
//         Condição        True         False  

console.log('Situação do aluno com média:', media3, 'é', situacao)

