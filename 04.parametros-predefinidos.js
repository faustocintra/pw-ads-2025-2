/*
    calcAreal() é uma função que calcula a área de uma figura
    geométrica, plana, dados da base, a altura e o tipo de figura
*/

//O parâmetro tipo foi transformado em predefinido com valor padrão 'R'
//Se a função for chamada com apenas dois parâmetros, o terceiro, omitido
//Será interpretado como 'R' retângulo

function calcArea(base, altura, tipo = 'R') 
{
    switch(tipo)
    {
        case 'R': //Retângulo
        return base * altura
        
        case 'T': //Triângulo
        return (base * altura) / 2  

        case 'E': //Elipse / Círculo
        return (base / 2) * (altura / 2) * Math.PI
        
        default: //Formas inválidas ou desconhecidas
        return undefined
    }
}

console.log(`Área triângulo 16x30: ${calcArea(16, 30, `T`)}`)
console.log(`Área elipse (círculo) 7,5 x 7,5: ${calcArea(7.5, 7.5, `E`)}`)
console.log(`Área retângulo 12,8 x 15,5: ${calcArea(12.8, 15.5, `R`)}`)
console.log(`Área forma inválida 8x17: ${calcArea(8, 17, `H`)}`)

// Chamando a função com apenas dois parâmetros
console.log(`Área retângulo 20 x 40: ${calcArea(20, 40)}`)
    
/*
    REGRAS PARA O USO DE PARÂMETROS PRÉ-DEFINIDOS
    1) O parâmetro pré-definido deve vir sempre POR ÚLTIMO
    2) Pode haver mais de um parâmetro predefinido, mas eles devem ser SEMPRE OS ÚLTIMOS
*/
