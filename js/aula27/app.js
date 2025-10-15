// Arguments -> Estrutura tipo Array (array-like), que contém todos os argumentos passados em uma função

function example() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

example(2, 6, 8);
