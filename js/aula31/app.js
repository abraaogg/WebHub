// nome de classe, a primeira letra é maiuscula
class Carro {
  constructor(marca, modelo, ano) {
    // propriedade = valor
    this.nomeDaMarca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

let carro1 = new Carro("Honda", "Civic", 2020);
let carro2 = new Carro("Fiat", "Strada", 2024);

console.log(carro1);
console.log(carro2);

class Pessoa {
  constructor(nome){
    this.nome = nome;
    this.sexo = "masculino"; // o this que naõ é definido no parametro se torna padrão para todos as novas coisas criadas
  }
  // método -> função dentro de um objeto, sem precisar do nome function

  falarSobreFome(){
    console.log(`O ${this.nome} está com fome`)
  }

}

let bruno = new Pessoa("Bruno");
let math = new Pessoa("Math");

bruno.falarSobreFome();
math.falarSobreFome();