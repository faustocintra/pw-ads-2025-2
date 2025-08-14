let media = 7.6, media2= 5, situacao

// código normal de if e else
if(media >= 6){
    situacao = "aprovado"
}
else{
    situacao = "reprovado"
}

console.log("situação do aluno:", situacao)

// se haver apenas uma linha no corpo do if ou do else pode se abrevia-lo retinado as chaves do corpo
if(media2 >=6) situacao = 'Aprovado'
else situacao= "reprovado"

console.log("situação do aluno:", situacao)
// código de if e else com operador ternário
resultado = media2 >= 6?'Aprovado':'Reprovado'
// resultado = condição ? resultado de verdadeiro : resultado de falso
console.log("situação do aluno:", resultado)

/*--------------------------------------------------*/

let user = 'guest', msg

//decidindo se o usuário pode entrar, usando if..else
/* quando há apenas uma linha após um if, um while, etc.., podemos omitir chaves */

if(user === 'admin') msg = 'bem vindo'
else msg = 'acesso negado'

console.log(user, msg)

//tomando a mesma decisão, mas usando o operador ternário
msg = user === 'admin' ? 'bem vindo' : 'acesso negado'

console.log(user,msg)