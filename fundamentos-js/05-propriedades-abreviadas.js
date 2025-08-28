//Alguns dados de um usuário
const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'junin'
const group = 'alunos'

//CRIANDO UM OBJETO A PARTIR DAS VARIÁVEIS ACIMA
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/* Quando o nome das propriedades do objeto é idêntico à das 
variável que lhe dará o valor, é possível usar a sintaxe chamada PROPRIEDADE ABREVIADA, 
que permite não repetir os nomews das variáveis à frente do nome das propriedades*/
const user2 = {
    fullname,
    username,
    group
}
console.log('Abreviado')
console.log(user2)
//O objeto user2 é idêntico ao user1, mas foi criado com a sintaxe abreviada

//Um objeto pode mesclar propriedades abreviadas e não abreviadas
const user3 = {
    fullname, 
    username,
    password: 'Todo Poderoso Timão',
    group,
    lastLogin: '2025-08-14 10:47:23'
}
console.log("Misto")
console.log(user3)
//O objeto user3 tem propriedades abreviadas e não abreviadas

/*Depurando usando propriedades abreviadas*/
const x = 10, y = 'batata'

/* Exibindo o valor das 2 variáveis com console.log(). 
Observe que os valores serão mostrados mas a sáida não informa 
quais as variáveis de onde provêm os valores*/
console.log(x, y) 

/* Saída melhorada: passando um objeto formado pelas variáveis como 
propriedades abreviadas para o console.log(), 
conseguimos identificar de onde vem os valores*/
console.log({x, y})