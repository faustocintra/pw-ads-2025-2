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

//////////////////////////////////////////////////////////////////

let user = 'guest', msg

// Decidindo se o usuário pode entrar, usand if/else

/*
    Quando há apenas uma linha após um if, um while, etc... Podemos omitir as chaves
*/

if(user === 'admin') msg = 'Bem-vindo!'
else msg = 'Acesso negado'

console.log(user, msg)

// Tomando a mesma decisão mas usando operador ternário
msg = user === 'admin' ? 'Bem-vindo' : 'Acesso negado'

console.log(user, msg)

