// FOREACH -> iterar os elementos de um array de forma simples e moderna 

//iterar -> passar por cada elemento de um array, seja para mostrar, modificar

let names = ["gustavo", "marcos", "rafael", "henrique", "juliano"];

for( let i = 0; i < names.length; i++ )

console.log(names[i])


// forEach(ffunction(cadaElementoArray, indiceArray, arrayCompleto))

names.forEach(function (abacate, index, array){
    console.log(abacate, "-", index )
})