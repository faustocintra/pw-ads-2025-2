const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro Alto/MG'   
//Mesclando strings com variaveis usando concatenaçao 
let msg1 = 'Meu Nome e: ' + nome + ', tenho: ' + idade + ' anos e moro em: ' + cidade + ' '
console.log(msg1)

// template string , mesclando string = variaveis usando o template string 
// templante strings sao OBRIGATORIAMENTE delimitadas pór `` (crase)
// ACENTOS GRAVES / BACKTICKS 

const msg2 = `Meu nome:  ${nome}, ${idade} anos e moro em ${cidade}`
console.log(msg2)

// dentro de uma template sting nao estamos limitados a usar apenas variaveis 
// dentro do simnolo ${}, qualquer codigo JavaScript valido pode ser empregado ali 

console.log(`EM ${2025+7}, ${nome.toUpperCase()}, TERA ${idade+7}, ANOS.`)

/*--------------------------------------------------------------------------------------------------------------------*/

// parametros predefinidos.js ele se basea em funçoes 
/* calcAre() e uma funçao que calcula a area de uma figura aritimetrica plana , dados a base, A altura, e i tipo de forma

se o parametro 'tipo' for predefnido com valor padrao 'R'
se a funçao for chamada com apenas 2 parametros o terceiro omitido sera interpretado como 'R'
ex: function calcArea(base, altura, tipo = 'R')
*/

function calcArea(base, altura, tipo= 'R') {
    switch(tipo) {
        case('R') : //Retangulo
        return altura * base

        case('T') : //Triangulo 
        return (altura * base) / 2

        case('E') : //Eclipse ou Circulo 
        return (base / 2) * (altura / 2) * Math.PI
        default : // Formas invalidas / desconhecidas 
           return undefined
    }
}

console.log(`Area Triangulo 10 X 30: ${calcArea(10, 30, 'T')}`)
console.log(`Area eclipse 7,5 X 7,5: ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Area Retangulo 12,8 X 15,5: ${calcArea(12.8, 15.5, 'R')}`)
console.log(`Area Forma invalida 10 X 30: ${calcArea(10, 30, 'H')}`)

// chamada com apenas 2 parametros e 1 predefinido
console.log(`Area do rentagulo 20 X 40: ${calcArea(20, 40)}`) // tem que passar um retangulo 

/* 
REGRAS DE USO DE PARAMETROS PRE DEFINIDOS 
1) O PARAMETRO predefinido deve sempre ser O(OS) ULTIMOS (a base nao pode ser predefinida)
2) Pode haver mais de u parametro predefinido , mas eles devem ser sempre os ultimos
*/ 