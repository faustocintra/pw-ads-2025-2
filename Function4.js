// propriedades abreviadas 
// exemplo de dados de usuario 
 const fullname = 'Jonas Rextossauro '
 const username = 'Jonas Rex'
 const group = 'Alunos'

 // criando um objeto a partir das variaveis acima 
 const user1 = {
    fullname: fullname,
    username: username,
    group:    group
 }
 console.log(user1)

 /*
 Quando os nome das propriedades dos objetos sao identicas a da variavel que lhe da o valor e possivel 
 usar a sintaxe chamada PROPRIEDADE ABREVIADA que lhe permite nao repetir os nomes das variaveis a frente do nome das propriedades  
 */

 const user2 = {
    fullname,
    username,
    group
 }
 console.log(user2) // quando e identico nao e nescessario repetir na frente da chave com a variavel o programa ja subi entende que e o msm valor 
 // so funcina em JS ate meu onde sei 

 // Um objeto pode  mesclar propriedades abreviadas e nao abreviadas 
 const user3 = {
    fullname,
    username,
    password : 'T-Rex',
    group, 
    lastlongin : '20/12/2025 = 10:45:24'
 }   
 console.log(user3) // se os parametros sao iguais mantem abreviados porem se sao diferentes e nescessario adicionar um valor 

 /*
 DEPURANDO USANDO PROPRIEDADES ABREVIADAS 
 */
const x = 10, y = 'Batata'

/*
Exibindo os valor das dias variaveis com o console.log() observe que os valores serao mostrados mas a saida nao informa quais
as variaveis de onde provem valores   
*/

console.log(x,y)

/*
Saida melhorada: passando um objeto formado pelas variaveis como propiedades abreviadas para o console.log(), conseguimos identificar de onde vem os valores 
*/
console.log({x,y}) // usando chaves dentro dos parenteses