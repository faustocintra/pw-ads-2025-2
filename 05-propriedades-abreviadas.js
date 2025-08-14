//Alguns dados de um usuário
const fullname = "Andrew Carrey"
const username = "Drewzin"
const group = "Alunos"

//CRIANDO UM OBJETO COM AS VARIÁVEIS ACIMA
const user1 = {
  fullname: fullname,
  username: username,
  group: group
}

console.log(user1)

/* 
Quando o nome das propriedades do objeto é idêntico à da variável, podemos usar a sintaxe abreviada, que permite não repetir o nome da variável à frente da propriedade
*/
const user2 = {
  fullname,
  username,
  group
}

console.log(user2)

// O objeto pode mesclar propriedades abreviadas e não abreviadas
const user3 = {
  fullname,
  username,
  password: "123456",
  group,
  lastLogin: new Date().toLocaleDateString('pt-BR')
}

console.log(user3)

// Exibindo o valor das 2 variáveis com console.log()
// Observe que os valores serão mostrados, mas a saída não informa quais as variáveis de onde vieram os valores
const x = 10
const y = "Batata"
console.log(x, y)

// Saída melhorada, passando um objeto formado pelas propriedades abreviadas para o console.log(), assim conseguimos identificar de onde vieram os valores
console.log({ x, y })
