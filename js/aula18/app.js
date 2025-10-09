//Slice -> fatiar um array e gerar um novo array, e não modifica o array original

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// slice(ondeVamosComecaraFatiar, ateOnde)

let numsFatiados = nums.slice(3, 6); // do indice 3 ate o 5

console.log(nums);
console.log(numsFatiados);

let names = ["gustavo", "marcos", "rafael", "henrique", "juliano"];
let namesFatiados = names.slice(1, 3);
console.log(namesFatiados);
