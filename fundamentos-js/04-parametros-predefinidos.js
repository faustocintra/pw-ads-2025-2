/*
    calcArea() é uma função que calcula a área de uma figura geométrica plana, dadoa a base, a altura e o tipo de forma
*/
// O parâmetros 'tipo' foi transformado em predefinido, com valor padrão 'R'
// Se a função for chamada com apenas 2 parâmetros, o terceiro, omitido, será interpretado com 'R' 0
function calcArea(base, altura, tipo = 'R'){
    switch(tipo){
        case 'R': //Retângulo
            return base * altura
        case 'T': //Triangulo
            return base * altura / 2
        case 'E': //elipse/circulo
            return(base/2) * (altura/2) * Math.PI
        default: //formas invalidas/desconhecidas
            return undefined
    }
}
console.log(`Área triângulo 10x30 : ${calcArea(10, 30, 'T')}`)
console.log(`Área elipe (circulo) 7,5 x 7,5 : ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Área retângulo 12,8 x 15,5: ${calcArea(12.8, 15.6, 'R')}`)
console.log(`Área forma inválida 8 x 17 : ${calcArea(8, 17, 'H')}`)

//Chamada a função com apenas dois parâmetros
console.log(`Área retângulo 20x40: ${calcArea(20, 40)}`)

/*
    REGRAS PARA O USO DE PARÂMETROS PREDEFINIDOS
    1) O parâmetro predefinido deve vir sempre POR ÚLTIMO
    2) Pode haver mais de um parâmetro predefinido, mas eles devem ser SEMPRE OS ÚLTIMOS
*/
