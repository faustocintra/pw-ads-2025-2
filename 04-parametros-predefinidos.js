/*
    calcArea() é uma função que calcula a área de uma figura geométrica plana, dados a basa, altura e o tipo da forma
*/

// O parâmetro 'tipo' foi transformado em predefinido, com o valor padrão 'R'
// Se a função for chamada com apenas dois parâmetros, o terceiro, omitido, será interpretada como 'R'
function calcArea(base, altura, tipo = 'R'){
    switch(tipo){
        case 'R':
            return base * altura
        case 'T':
            return (base * altura)/2
        case 'E':
            return (base/2) * (altura/2) * Math.PI
        default:
            return undefined
    }
}

console.log(`Área triângulo 10 x 30: ${calcArea(10, 30, 'T')}`)
console.log(`Área elipse 7.5 x 7.5: ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Área retângulo 12.8 x 15.5: ${calcArea(12.8, 15.5, 'R')}`)
console.log(`Área forma inválida 8 x 17: ${calcArea(8, 17, 'H')}`)

// Chamando a função com apenas dois parâmetros
console.log(`Área retângulo 20 x 40: ${calcArea(20, 40)}`)

/*
    REGRAS PARA O USO DE PARÂMETROS PREDEFINIDOS
    1) O parâmetro predefinido deve vir sempre POR ÚLTIMO
    2) Pode haver mais de um parâmetro predefinido, mas eles devem ser SEMPRE OS ÚLTIMOS
    
*/