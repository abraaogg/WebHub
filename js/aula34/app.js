// Herança -> extends-> objeto herda as propriedades e métodos de um objeto

// Situação -> (Funcionário | Clientes)

/*

Pessoa -> nome sobrenome, cpf, email

Funcionários -> herdar prop. Pessoa, funcao, salario

Clientes -> herdar prop. email, renda

*/

class Pessoa {
  constructor(nome, sobrenome, cpf, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.email = email;
  }

  get nomeCompleto(){
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

class Funcionario extends Pessoa {
  constructor(nome, sobrenome, cpf, email, funcao, salario){
    super(nome, sobrenome, cpf, email)
    this.funcao = funcao;
    this.salario = salario;
  }
}

class Cliente extends Pessoa{
  constructor(nome, sobrenome, cpf, email, renda) {
    super(nome, sobrenome, cpf, email);
    this.renda = renda;
  }
}

let f1 = new Funcionario("Marcos", "Costas", 23656235, "marquin@gmail.com", "Developer", 7000)
console.log(f1.nomeCompleto)

let c1 = new Cliente("Larissa", "Silva", 16548651, "lari@gmail.com", 15000)
console.log(c1)
