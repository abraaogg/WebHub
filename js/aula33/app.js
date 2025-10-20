// Funções para objetos

let pessoa = {
  Nome: "Gustavo",
  profissao: "dev",
  age: 21
}

//Object.keys Cria um array

console.log(Object.keys(pessoa))


//Object.values Cria um array de valores

let carrinho = {
  camisete: 10,
  bone: 80,
  calca: 80 
}

let precoTotal = Object.values(carrinho)

console.log(precoTotal.reduce((acm, nAtual) => acm + nAtual))

//Object.entries -> retornar um array de arrays [[chave: valor], [chave: valor]] 

console.log(Object.entries(pessoa))
