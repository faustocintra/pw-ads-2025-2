// calcarea é uma função que calcula a área de uma figura geométrica plana, dados a base, altura e o tipo da figura
// O parâmetro tipo foi transformado em pré-definido, com valor padrão "R"
// Se a função for chamada com apenas 2 argumentos, o terceiro será considerado como "R"
function calcArea(base, altura, tipo = "R") {
  switch (tipo) {
    case "R": //RETÂNGULO
      return base * altura;
    case "T": //TRIÂNGULO
      return (base * altura) / 2;
    case "C": //CÍRCULO
      return (base / 2) * (altura / 2) * Math.PI;
    default: // FORMAS INVÁLIDAS
      return undefined;
  }
}

console.log(`Área do retângulo 12,8 x 15,5 = ${calcArea(12.8, 15.5, "R")} cm²`);
console.log(`Área do triângulo 10 x 30 = ${calcArea(10, 30, "T")} cm²`);
console.log(`Área do círculo 7,5 x 7,5 = ${calcArea(7.5, 7.5, "C")} cm²`);
console.log(`Área de uma forma inválida = ${calcArea(10, 20, "X")}`);

//Chamando a função com 2 argumentos
console.log(`Área do retângulo 20 x 40 = ${calcArea(20, 40)} cm²`);

/* 
REGRAS PARA O USO DE PARÂMETROS PRÉ-DEFINIDOS
1) O parâmetro pré-definido deve vir sempre POR ÚLTIMO
2) Pode haver mais de um parâmetro pré-definido, mas eles devem ser SEMPRE OS ÚLTIMOS
*/