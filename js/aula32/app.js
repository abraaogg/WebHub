// Formas de criar objetos

// Objeto coleção de chave e valor

// Formas Literal

let pessoa = {
  nome: "Gustavo",
  idade: 24,
  profissao: "Designer",
};

let empresa = {
  nome: "Tecnos",
  cnpj: 8965546,
  workers: [
    { name: "bruno", age: 20 },
    { name: "tito", age: 20 },
  ],
  endereco: {
    rua: "Rua das flores",
    numero: 62,
  },
};

console.log(empresa.nome);

// New Object

let pessoa1 = new Object();

pessoa1.nome = "Matheus";
pessoa1.idade = 22;

console.log(pessoa1);

// Metodo construtor

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.combustivel = "diesel";
  }
}

let carro1 = new Carro("honda", "civic", 2020)
let carro2 = new Carro("fiat", "estrada", 2020)
console.log(carro1)
console.log(carro2)