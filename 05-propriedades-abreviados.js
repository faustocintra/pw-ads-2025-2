//Alguns dados de um usuário

const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'Junin'
const group = 'alunos'

//CRIANDO UM OBJETO A PARTIR DAS VARÍAVEIS ACIMA
const user1 = 
{
    fullname: fullname,
    username: username, 
    group: group
}

console.log(user1)

/*
    Quando o nome das propriedades do objeto é idêntico á da 
    varíavel que lhe derá o valor, é possível usar a sintaxe 
    chamada PROPRIEDADE ABREVIADA, que permite não repetir 
    os nomes das variáveis á frente do nome da propriedades
*/

const user2 =
{
    fullname,
    username,
    group
}

console.log(user2)

//Um objeto pode mesclar propriedades normais e abreviadas
const user3 = 
{
    fullname,
    username,
    password: `SoberanoTricolor`,
    group,
    lastLogin: `2025-08-14 10:47:23`
}

console.log(user3)

/*
    DEPURANDO USANDO PROPRIEDADES ABREVIADAS
*/ 
const x = 10, y = 'batata'
/*
    Exibindo o valor das duas variáveis com console.log().
    Observe que os valores serão mostrados, mas a saida não
    informa quais as variáveis de onde provém os valores
*/

console.log(x,y)

/*
    Saida melhorada: passando um objeto formado pelas variavéis 
    como propriedades abreviadas para o console.log(), conseguimos
    identificar de onde vêm os valores 
*/

console.log({x,y})