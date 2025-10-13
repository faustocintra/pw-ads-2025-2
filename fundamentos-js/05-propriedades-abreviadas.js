const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'junin'
const group = 'alunos'

// CRIANDO UM OBJETO A PARTIR DAS VARIÁVEIS ACIMA
const user1 = {
    fullname:fullname,
    username: username,
    group: group
}

console.log(user1)

/*
    Quando o nome das propriedades de objeto é identico à da
    variável que lhe dará o valor, é possivel usar a sintaxe
    chamada PROPRIEDADE ABREVIADA, que permite não repetir
    os nomes das variáveis à frente do nome das propriedades
*/

const user2 = {
    fullname,
    username,
    group
}
console.log(user2)

// Um objeto pode mesclar propriedades abreviadas e não abreviadas
const user3 = {
    fullname,
    username,
    password: 'TodoPoderosoTimao',
    group,
    lastlogin: '2025-08-14 10:47:23'
}

console.log(user3)

/* DEPURANDO USANDO PROPRIEDADES ABREVIADAS */

const x = 16, y = 'batata'

/*
    Exibindo o valor das duas variáveis com console.log().
    Observe que os valores serão mostrados, mas a saída não
    informa quais as variáveis de onde provêm os valores
*/
console.log(x,y)

/*
    Saída melhorada: passando o objeto formado pelas variáveis
    como propriedades abreviadas para o console.log(), conseguimos 
    identificar de onde vêm os valores
*/ 
console.log({x,y})