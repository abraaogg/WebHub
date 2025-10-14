// Metodo Reduce -> reduzir -> condensar um array em um único valor

let nums = [1, 2, 3];
let soma = 0;

// forEach
nums.forEach(somar);

function somar(num) {
  soma = soma + num;
  console.log(soma);
}

//for
for(let i =0; i < nums.length; i++){
  soma += nums[i]
}

// array.reduce(function(acumulador, numeroAtual), numeroInicial )
let resultado = nums.reduce(somar)

function somar(acumulador, numeroAtual){
  return acumulador + numeroAtual
}
console.log(resultado)