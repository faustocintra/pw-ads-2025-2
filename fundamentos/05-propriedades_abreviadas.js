//alguns ddos de usuário
const fullname = "Jonicleisson Junqueira Júnior"
const username = 'Juni'
const group = 'alunos'

//criando um objeto a partir das váriaveis acima
const user1 = {

    fullname: fullname,
    username: username,
    group: group
}

console.log(user1)

// muitas vezes o nome da chave de um objeto é o mesmo que o da variavel que lhe dará o valor. É possivel usar a sintaxe chamada PROPRIEDADE ABREVIADA, que permite não repetir 
//os nomes das variáveis á frente do nome das propriedades 

const user2 = {
 fullname,
 username,
 group
}

console.log(user2)

// um objeto pode mesclar propriedades abreviadas e não abreviadas
const user3 = {
    fullname,
    username,
    password: 'TodoPoderosoTimao',
    group,
    lastLogin: '2025-08-14 10:47:23'
}
   
console.log(user3)

// depurando usando propriedades abreviadas

const x = 10, y = 'batata'

/* exibindo o valor das duas variaveis com console.log(). Observe que os valores serão mostrados, mas a saída não informa quais as variaveis de onde proêm os valores*/
console.log(x, y)

/* saída melhorada: passando um objeto formado pelas variaveis como propriedades abreviadas para o console.log(), conseguimos  identificar de onde vêm os valores */

console.log({x, y})