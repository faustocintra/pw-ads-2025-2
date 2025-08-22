let media = 7.6, situaçao 
if ( media => 6 )[
    situaçao = 'APROVADO'
]
else situaçao = 'REPROVADO'

console.log('Situaçao do aluno e:', media , 'e', situaçao)

//para economizar lnha se eu tiver apenas um comando no meus if eu subo eles 


if ( media => 6 ) situaçao = 'APROVADO'
else situaçao = 'REPROVADO'

console.log('Situaçao do aluno e:', media , 'e', situaçao)

// outro metodo agora com operador ternario 

media = 5.1
// Decidindo a situaçao do aluno usando o operador ternario
   situaçao = media >= 6 ? 'APROVADO': 'REPROVADO'
// {      Condiçao      }{condiçao verdadeira} apos os (:) resultado e Falso e como se a primeira parte ate a (?) seja o if e apos isso para separar as duas repostas se usa o :
console.log('Situaçao do aluno e:', media , 'e', situaçao)

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let user = 'guest', msg 
// decidindo se o usuario pode entrar usando if ... else 
// Quando ha a apenas uma linha apos um IF, um while , etc , podemos omitir as chaves

if(user==='admin') msg = 'Bem-vindo'
else msg = 'Acesso negado'

console.log(user,msg)

// tomando a mesma decisao mais usando o operador ternario

msg = user === 'admin' ? 'Bem-Vindo' : 'Aceso Negado'

console.log(user,msg)