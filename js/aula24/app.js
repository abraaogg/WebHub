// Destructuring - > maneira moderna de extrairvalores de um array ou objeto e armazenalos em uma variável

const fruits = ["banana", "apple", "strawberry"];

let [fruit1, fruit2, fruit3, fruit4 = "orange"] = fruits;

console.log(fruit2);
