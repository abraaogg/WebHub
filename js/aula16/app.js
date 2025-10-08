// Inserir elementos dentro de arrays

let nomes = ["gustavo", "marcos", "julio"];

// Inserindo elementos no final de um array

// Push

// array.push(4)

nomes.push("matheus");
console.log(nomes);

// Inserindo elementos no início de um array

// array.unshift(elemento)

nomes.unshift("Jonas")
console.log(nomes);

// Splice -> Adicionar/Remover elementos de um array

// .splice(indiceBase, Quantos Elementos Remover, Qual elemento adicionar, Segundo elemento, Terceiro....)

nomes.splice(1, 0, "renan")
console.log(nomes);

