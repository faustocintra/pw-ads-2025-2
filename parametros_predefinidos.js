/*
    calcArea() é uma função que calcula a área de uma figura demoterica plana, dados a bnase, altura e o tipo de forma
*/

function calcArea(altura, base, tipo = 'R'){
    switch(tipo){
        case 'R': //retângulo
            return base*altura
        case 'T': // triangulo
            return base * altura / 2
        case 'E': //elipse/circulo
            return (base/2) * (altura/2) * Math.PI
        default: //formas inválidas/desconhecidas
            return undefined
    }
}

console.log(`área triangulo 10x30: ${calcArea(10,30, 'T')}`)
console.log(`área elipse(círculo) 7,5x7,5: ${calcArea(7.5, 7.50, 'E')}`)
console.log(`área retângulo 12,8x15,5: ${calcArea(12.8, 15.5, 'R')}`)
console.log(`área forma inválida 8x17: ${calcArea(8, 17, 'H')}`)
console.log(`teste de forma padrão 10x10: ${calcArea(10,10)} `) //só passei 2 parâmetros inves de 3 pos o terceiro já vem como 'R'

// por padrão a maioria dos terrenos são retangulares, portanto dá para deixar o valor do tipo em "R" como padrão da função, mas que pode ser modificada caso o usuário altere o tipo por escolha própria

/* regras para o uso de parâmetros predefinidos
1) o parâmetro predefindio deve vir sempre por último
2) pode haver mais de um parametro predefinido, mas eles devem ser SEMPRE os últimos
*/