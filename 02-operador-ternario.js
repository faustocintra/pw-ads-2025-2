let media = 7.6, situacao

if(media >= 6){
    situacao = 'APROVADO'
}
else{
    situacao = 'REPROVADO'
}

/*
    Toda vez que houver apenas uma linha de corpo no if é possível fazer dessa forma:
    if(media >= 6) situacao 'APROVADO'
    else situacao 'REPROVADO'
*/

console.log('Situação do aluno com média', media, 'é', situacao)

let mediaT = 5
situacaoT = mediaT >= 6 ? 'APROVADO' : 'REPROVADO'
console.log('Situação do aluno com média', mediaT, 'é', situacaoT)
