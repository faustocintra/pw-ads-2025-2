/*
    calcArea() é um função que calcula a área de uma figura geométrica plana,
    dados a base, a altura e o tipo da forma
*/

// Deixando por padrão o valor de tipo como 'R', porém pode ser modificado caso o usuario passe o
// parametro

function calcArea(base, altura, tipo = 'R'){
    switch (tipo){
        case 'R': // Retangulo
            return base * altura
        case 'T': // Triangulo
            return base * altura / 2
        case 'E': // Circulo
            return (base / 2) * (altura / 2) * Math.PI
        default: // Formas invalidas
            return undefined
    }
}

console.log(`Àrea do triangulo 10x30: ${calcArea(10, 30, 'T')}`)
console.log(`Àrea do retangulo 12,8x15,5: ${calcArea(12.8, 15.5, 'R')}`)
console.log(`Àrea do circulo 7,5x7,5: ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Àrea invalida 8x17: ${calcArea(8, 17, 'H')}`)

// Chamando a função com apenas dois parametros
console.log(`Àrea do retangulo 20x40: ${calcArea(20, 40)}`)

/*
    Regras para o uso de parametros predefinidos
    1) O parametro predefinido deve vir sempre POR ULTIMO
    2) Pode haver mais de um parametro predefinido, mas eles devem ser SEMPRE OS ULTIMOS
*/