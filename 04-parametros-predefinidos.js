/**
    calcArea() é uma função que calcula a area de uma figura geometrica plana,
    dados a base, altura e o tipo da forma
 */
// O parametro 'tipo' transformado em predefinido, com valor padrão 'R'
// Se a função for chamada com apenas 2 parâmetros, o terceiro, omitido, será interpretado como 'R'
function calcArea(base, altura, tipo = 'R'){
    switch(tipo){
        case 'R':  //retangulo
            return base * altura
        case 'T':  //triangulo
            return base * altura / 2
        case 'E':  //elipse/circulo
            return (base/2) * (altura/2) * Math.PI
        default: //formas invalidas/desconhecidas
            return undefined
    }
}

console.log(`Área triângulo 10x30 : ${calcArea(10, 30, 'T')}`)
console.log(`Área elipse (circulo) 7,5 x 7,5 : ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Área rentângulo 12,8 x 15,5 : ${calcArea(12.8, 15.6, 'R')}`)
console.log(`Área forma inválida 8x17 : ${calcArea(8, 17, 'H')}`)

// Chamada a função com apenas dois parâmetros
console.log(`Área retângulo 20x40: ${calcArea(20, 40)}`)

/*
    REGRAS PARA O USO DE PARÂMETROS PREDEFINIDOS
    1) O parametro predefinido deve vir sempre POR ÚLTIMO
    2) Pode haver mais de um parametro predefinido, mas eles devem ser SEMPRE OS ÚLTIMOS
*/