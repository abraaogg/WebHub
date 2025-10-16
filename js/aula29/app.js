// Funções Callback -> funções que são utilizadas como parâmetro de entrada em outra função

let calculadora = function (num1, num2, funcaoCallBack) {
  return funcaoCallBack(num1, num2);
};

let somar = (a, b) => a + b;
let subtrair = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

console.log(typeof somar);

console.log(calculadora(4, 6, somar));
