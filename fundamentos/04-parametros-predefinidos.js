/*
    calcArea() é uma função que calcula a área de uma 
    figura geométrica plana, dados a base, a altura e o tipo da forma
*/
function calcArea(base, altura, tipo = 'R') {
    switch(tipo) {
        case 'R': // Retângulo
            return base * altura
        case 'T': // Triângulo
            return base * altura / 2
        case 'E': // Elipse/circulo
            return (base / 2) *  (altura / 2) * Math.PI
        default: // Formas inválidas/desconhecidas
            return undefined
    }
}

console.log(`Área triângulo 10x30: ${calcArea(10, 30, 'T')}`)
console.log(`Área elipse (círculo) 7, 5x7, 5: ${calcArea(7.5, 7.5, 'E')}`)
console.log(`Área retângulo 12, 8x15, 5: ${calcArea(12.8, 15.5, 'R')}`)
console.log(`Área forma inválida 8x17: ${calcArea(8, 7, 'H')}`)

// Chamando a função com apenas dois parâmetros
console.log(`Área retângulo 20x40: ${calcArea(20, 40)}`)

/* 
Regras para uso de parâmetros predefinidos
1) O parâmetro predefinido deve vir sempre por último
2) Pode haver mais de um parâmetro predefinido, mas eles devem ser sempre os últimos
*/