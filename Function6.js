// arquivo 7 desestruturaçao  e a operaçao pela qual e possivel  extrair variaveis individuais de vetores e objetos atribuindo-os a variaveis avulsos 

//1) Desestruturaçao de vetor 
const carros = ['Fusca', 'Chevete', 'Opala']

//desestruturaçao 
const [c1,c2,c3] = carros

// sem a desestruturaçao seria nescessario fazer 
//const c1 = carro[0] , const c2 = carro[1]  const c3 = carro[2]
console.log({c1,c2,c3})