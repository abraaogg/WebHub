// ERRORS -> Situações inesperadas no código, que acabam enterrompendo nosso programa

/*
Reference Error .-> erro de referência

Syntax error -> erro de sintaxe

Type error -> erro do tipo de dado
*/

console.log(nome); // reference error

// console.log('hi' 9) syntax error

let num = 2;
console.log(num.toUpperCase); // type error

console.log("make");

// Try catch !!!!!!!!

try {
  console.log(bacate);
} catch (e) {
  console.log(`Erro: ${e.name}, mensagem: ${e.message}`);
  console.log("Não carregou :(");
}

// Throw -> lançar um erro

function divide(a, b) {
  if (b === 0) {
    throw new Error("Um número não pode ser dividido por zero.");
  } else {
    return a / b;
  }
}

try{
    console.log(divide(20/4))
}catch(bike){
    console.log(bike.message)
}