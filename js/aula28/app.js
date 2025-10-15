// Arrow Functions -> sintaxe mais simples e moderna de descrever funções

let somar = function (num1, num2) {
  return num1 + num2;
};
console.log(somar(2, 4));

// arrow function
let multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 3));

// 1 parametro de entrada, não precisa de parenteses(), como o de cima que tem a,b

let imprimir = (nome) => {
  console.log("ola " + nome);
};
imprimir("Bruno");
