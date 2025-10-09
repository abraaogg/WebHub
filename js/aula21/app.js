// Metodo Filter -> filtra os elementos de um array e gerar um novo array com esses elementos filtrados

// cenário: Filtrar pessoas que são maiores de idade

const age = [23, 12, 8, 35];

// const pessoasAdulta = agePessoas.filter()

function numeroMaior18(numero) {
  return numero >= 18; // true ou false
}

console.log(numeroMaior18(19));

let names = ["math", "gab", "ana", "jess"];

let letra = names.filter(comecaComM);

function comecaComM(name) {
  return name.startsWith("m");
}

console.log(letra);
