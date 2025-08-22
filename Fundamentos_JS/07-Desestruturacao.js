/*DESESTRUTURAÇÃO: É a operação em que é possível extrair valores individuais de vetores ou objetos, atribuindo-os a variáveis avulsas*/

//Desestruturação do Vetor
const carros = ['Fusca', 'Brasília', 'Civic']
const [c1, c2, c3] = carros

/*
const c1 = carros[0]
const c2 = carros[1]
const c3 = carros[2]
*/

console.log(c1, c2, c3)

//DESESTRUTURAÇÃO PARCIAL: 1º e 3º valores
const [a, ,b] = carros
console.log("Primeiro e Terceiro carro:", a, b)

//DESESTRUTURAÇÃO PARCIAL: 2º e 3º valores
const [, m, n] = carros
console.log("Segundo e Terceiro carro:", m, n)

console.log('-'.repeat(80))

//PROBLEMA: Troca de valores de variáveis entre si (swap)
let v1 = 10, v2 = 20
console.log(`Valores Originais: v1 = ${v1}, v2 = ${v2}`)

//Modo Clássico de fazer um swap
/*
let aux = v1
v1 = v2
v2 = aux
console.log(`Valores Após Swap: v1 = ${v1}, v2 = ${v2}`)   
*/

//Usando Desestruturação para fazer um swap
{ [v1, v2] = [v2, v1] }
console.log(`Valores Após Swap: v1 = ${v1}, v2 = ${v2}`)

console.log("-".repeat(80))

// 2) Desestruturação de Objetos
const pessoa = {
    nome: "João",
    sexo: "M",
    dataNasc: "2005-10-15",
    email: "joao@example.com"
}

/* 
Na desestruturação de objetos, as variáveis avulsas:
- Devem ter os MESMO NOME das propriedades do objeto
- Podem ser especificadas em qualquer ordem
- Pode ser feita a desestruturação parcial
*/

const {sexo, nome, email} = pessoa
console.log(`Nome: ${nome} \nSexo: ${sexo} \nEmail: ${email}`)